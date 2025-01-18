# Hacker-News Websocket Scrapper
A Node.js service to scrape real-time stories from Hacker News, broadcast them to clients using WebSockets, and store data in a MySQL database.

## Setup Instructions
- Node.js >=22.0
- MySQL
- Git

### 1. Clone the repository

```bash
git clone https://github.com/SinjinxJohn/HackerNews-Scrapper.git
cd HackerNews-Scrapper
```

### 2. Install dependencies
npm install

### 3. Set up the MySQL database
You need a MySQL instance running locally or remotely.
Execute the sql commands mentioned in db_init.sql file.

#### 3.1 Configure the MySQL connection
Modify the values of .env file
DB_HOST=localhost or <hostname>
DB_USER=root or <database_user>
DB_PASSWORD=<your_password>
DB_NAME= hacker

Make sure to replace DB_HOST, DB_USER, DB_PASSWORD according to your mysql instance.

### 4. Once you have setup your database and environment variables,you can start the application by running the following command:
npm start

### 5. Testing the Websocket Connection
To test the WebSocket connection:
1. You can use any websocket client to connect to the WebSocket server at:
ws://localhost:3000

or 
1. For simplicity I have provided a client script(client.js) to test the WebSocket server under tests/
Run node client.js after running the node.js server to connect to the WebSocket Server. 
2. Once connected, the server will send real-time Hacker News stories also on initial connection it will send the count of stories published in last 5 minutes.


