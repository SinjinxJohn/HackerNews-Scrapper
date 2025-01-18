const http = require('http');
const express = require('express');
const sequelize = require('./config/db');
const {setupWebSocket} = require('./services/websocket');
const scheduleScraping = require('./services/cronModule');


const app = express();
const server = http.createServer(app);

(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({force:true});
        console.log('All models were synchronized successfully.');
        const wss = setupWebSocket(server);
        scheduleScraping(wss);
        server.listen(3000,()=>{
            console.log('Server started on http://localhost:3000');
        });
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();