const Websocket = require('ws');
const Story = require('../models/story');


const setupWebSocket = (server)=>{
    const wss = new Websocket.Server({server});

    wss.on('connection',async(ws)=>{
        console.log('New client connected');


        const recentCount = await Story.count({
            where:{
                createdAt:{
                    [require('sequelize').Op.gte]: new Date(Date.now() - 5 * 60 * 1000),
                }
            }
        });
        ws.send(JSON.stringify({recentCount}));
        ws.on('message', (message) => {
            console.log('Received:', message);
        });
    });

    return wss;
}

const broadcast = async(wss,message)=>{
    wss.clients.forEach((client) => {
        if(client.readyState === Websocket.OPEN){
            client.send(JSON.stringify(message));
        }
    });
}

module.exports = {setupWebSocket,broadcast};    