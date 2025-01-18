const sequelize = require('../config/db');
const Story = require('../models/story');


(async () => {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    const sampleStory = await Story.create({
        title:"First story",
        url:"http://www.google.com"
    })

    // console.log('Sample story created',sampleStory.json());
})();