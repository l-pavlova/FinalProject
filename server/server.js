const express = require('express');
const bodyParser = require('body-parser');

const { SERVER_PORT } = require('./constants/config.js');
const routes = require('./routes');

const { urlencoded, json } = bodyParser;

const port = process.env.port || SERVER_PORT;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

