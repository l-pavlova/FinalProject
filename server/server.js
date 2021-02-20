const express = require('express');
const http = require('http');
var cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const { SERVER_PORT } = require('./constants/config.js');
const { REACT_PORT } = require('../messaging-platform/src/constants/env.js');
const routes = require('./routes');
const { callbackify } = require('util');


const { urlencoded, json } = bodyParser;

const port = process.env.port || SERVER_PORT;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});



app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routes);
app.use(express.static(path.resolve(__dirname, '..', 'build')));

io.on('connection', socket => {
  console.log("io connected");

  socket.on('join', (user, callback) => {
    console.log(user);
    socket.emit('message', "Wellcome");

    socket.broadcast.to('1').emit('message', {user: "Pesho joind"});

    socket.join('1');

    //callback();
  })

  socket.on('disconnect', () => {
    console.log('user logout')
  })
});

app.use(express.static(path.join(__dirname, '../messaging-platform/build')));
if(process.env.NODE_ENV === 'production') { 
   app.use(express.static(path.join(__dirname, '../messaging-platform/build'))); 
   app.get('/*', (req, res) => {    res.sendFile(path.join(__dirname = 'messaging-platform/build/index.html'));  })
  } else {
  app.get('/*', (req, res) => {  res.sendFile(path.join(__dirname+'messaging-platform/public/index.html'));})
}

server.listen(port, () => {
  console.log('in server')
  console.log(`App listening at http://localhost:${port}`)
})

