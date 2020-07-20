/* eslint-disable import/no-cycle */
import http from 'http';
import socketio from 'socket.io';

import app from '../src/app';
import socketManager from '../src/socketManager';

const server = http.createServer(app());

const io = socketio(server);

io.on('connection', socketManager);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('server has been started on port: ', port);
});

export default io;
