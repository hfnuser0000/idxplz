module.exports = async function schedule() {
    const schedule          = require('node-schedule');
    const updateNameCount   = require('./update-name-count');
    // schedule.scheduleJob('*/5 * * * * *', updateNameCount);
};


