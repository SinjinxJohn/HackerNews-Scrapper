const axios = require('axios');
const cheerio = require('cheerio'); 
const Story = require('../models/story');


const scrapeNews = async()=>{
    try {
        const {data}  =await axios.get('https://news.ycombinator.com/');
        const $ = cheerio.load(data);

        const stories = [];
        $('.athing').each((index,element)=>{
            const title = $(element).find('.titleline > a').text();
            const url = $(element).find('.titleline > a').attr('href');

            if(title && url){
                stories.push({title,url});
            }
        });

        for (const story of stories){
            await Story.findOrCreate({where:{title:story.title},defaults:story });
        }
        return stories;
        
    } catch (error) {
        console.log("Error scraping news",error); 
    }
}

module.exports = scrapeNews;