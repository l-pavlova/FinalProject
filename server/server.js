const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = process.env.port || 3001;

const app = express();
const userRouter = require('./controllers/userApi');
const chatRouter = require('./controllers/messagingApi');

mongoose.connect('mongodb://localhost/messaging-platform', {
  useNewUrlParser:true, useUnifiedTopology:true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/chat', chatRouter);

app.get('/', (req, res) => {
  res.send('Home')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

