import express from 'express';
import { urlencoded, json } from 'body-parser';
const port = process.env.port || 3001;

const app = express();
import userRouter from './controllers/userApi.js';
import chatRouter from './controllers/messagingApi.js';
import Fascade from './DAL/Fascade.js';

const fascade = new Fascade();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/user', userRouter);
app.use('/chat', chatRouter);

app.get('/', (req, res) => {
  res.send('Home')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

