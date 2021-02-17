const express = require('express');
const bodyParser = require('body-parser');

const { SERVER_PORT } = require('./constants/config.js');
const routes = require('./routes');

const { urlencoded, json } = bodyParser;

const port = process.env.port || SERVER_PORT;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
<<<<<<< HEAD


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
=======
app.use(routes);
>>>>>>> main

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

