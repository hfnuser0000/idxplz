const express   = require('express');
const next      = require('next');

const port      = parseInt(process.env.PORT, 10) || 3000;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({ dev });
const handle    = app.getRequestHandler();
const schedule  = require('./cron-jobs');
const router    = require('./router');

async function main() {
    schedule();

    await app.prepare();
    const server = express();

    server.use(express.json());
    server.use(router);

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`);
    });
}
main();


