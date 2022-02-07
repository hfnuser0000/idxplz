import fs from 'fs';

export default function handler(req, res) {
    let offset = req.query.offset;
    if(!offset) {
        return res.status(400).send('offset is required.');
    }
    offset = +offset;
    const date = new Date;
    const prefix0 = s => {
        return ('000' + s).slice(-2);
    };
    const dd = prefix0(date.getDate());
    const mm = prefix0(date.getMonth() + 1);
    const yy = prefix0(date.getFullYear());

    const nameList = fs.readFileSync('./data/names.txt').toString().split('\n');
    const sitemapData = nameList.slice(offset, offset+50000).map(name => {
        const formatted = name.replaceAll(' ', '-');
        return `https://printinix.com/${formatted}`
    }).join('\n');
    let filename = `sitemap-${yy}${mm}${dd}.txt`;
    let count = 1;
    while(fs.existsSync('./public/'+filename)) {
        filename = `sitemap-${yy}${mm}${dd}-${count}.txt`;
        count++;
    }
    fs.writeFileSync(`./public/${filename}`, sitemapData);
    return res.send(`
        <a href="/${filename}">Sitemap</a>
    `);
}
