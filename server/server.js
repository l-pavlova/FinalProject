import express from 'express';
import { urlencoded, json } from 'body-parser';

import userRouter from './controllers/userApi.js';
import chatRouter from './controllers/messagingApi.js';
import Adapter from './DAL/adapter.js'
const port = process.env.port || 3001;
//import repositories from './DAL/repository.js';
const adapter = await new Adapter().initialize();
adapter.initCollections();
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
  console.log(`Example app listening at http://localhost:${port}`)
})

