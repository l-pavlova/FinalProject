const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./controllers/userApi.js');
const chatRouter = require('./controllers/messagingApi.js');
const { SERVER_PORT } = require('./constants/config.js');

const Adapter = require('./DAL/adapter.js');

//const socket = require('socket.io');

const { urlencoded, json } = bodyParser;

const port = process.env.port || SERVER_PORT;

let adapter = {};

(async () => {
  try {
    adapter = await new Adapter().initialize();
    adapter.initCollections();
  } catch (e) {
    console.log(e);
  }
})();
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/user', (req, res, next) => {
  req.adapter = adapter;
  next();
}, userRouter);

app.use('/chat', (req, res, next) => {
  req.adapter = adapter;
  next();
}, chatRouter);

app.get('/', (req, res) => {
  res.send('Home')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

