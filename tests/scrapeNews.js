const sequelize = require('../config/db');
const scrapeNews = require('../services/scraper');



(async () => {
   try {
    await sequelize.sync({ force: true }); // Use `force: true` only in development
    console.log('Database synchronized.');
    const stories = await scrapeNews();
    console.log(stories);
   } catch (error) {
    console.log("error while scraping news",error);
   }
})();