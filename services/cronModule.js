const cron = require('cron');
const scrapeNews = require('./scraper');
const {broadcast} = require('./websocket');


const scheduleScraping = (wss)=>{
    const job = new cron.CronJob('*/30 * * * * *', async () => {
        console.log('Scraping Hacker News...');
        const stories = await scrapeNews();
        broadcast(wss, { newStories: stories });
    });

    job.start(); 
}

module.exports = scheduleScraping;