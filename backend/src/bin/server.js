/* eslint-disable import/no-cycle */
import http from 'http';
import socketio from 'socket.io';

import app from '../app';
// import socketManager from '../socketManager';
import {
  createRoom, addUserToDefaultRoom, addUserToRoom, getUsersInRoom, getDefaultRoom,
} from '../models/rooms';
import { createUser, removeUser, getUserBySocketId } from '../models/users';
import { addMessage, formatTime } from '../models/message';

const server = http.createServer(app());

const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('joinNewUser', ({ username }, callback) => {
    const { error, user } = createUser(username, socket.id);
    if (error) {
      return callback(error);
    }

    const defaultRoom = getDefaultRoom();
    const defaultRoomName = defaultRoom.name;

    addUserToDefaultRoom(user.name);

    socket.join(defaultRoomName);

    io.to(defaultRoomName).emit('roomData', { room: defaultRoom, users: getUsersInRoom(defaultRoomName) });

    return callback();
  });

  socket.on('joinToRoom', ({ roomName }) => {
    socket.join(roomName);
    const user = getUserBySocketId(socket.id);
    if (user) {
      addUserToRoom(user.name, roomName);
    }
  });

  socket.on('newMessage', ({ message, roomName }) => {
    const { time, ...rest } = message;
    const formattedMessageTime = formatTime(time);
    const newMessage = { time: formattedMessageTime, ...rest };
    addMessage(newMessage);
    io.to(roomName).emit('newMessage', newMessage);
  });

  socket.on('createRoom', ({ roomName }, callback) => {
    const { error } = createRoom(roomName);
    if (error) {
      callback(error);
    }

    callback();
  });

  socket.on('disconnect', () => {
    const user = getUserBySocketId(socket.id);
    if (user) {
      // removeUserFromRooms(user.name)
      removeUser(user.guid);
    }
    socket.disconnect(true);
  });
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('server has been started on port: ', port);
});

export default io;
