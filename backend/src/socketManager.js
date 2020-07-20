// /* eslint-disable import/no-cycle */
// import io from '../bin/server';

// import {
//   createRoom, addUserToDefaultRoom, addUserToRoom, getUsersInRoom, getDefaultRoom,
// } from './models/rooms';
// import { createUser, removeUser, getUserBySocketId } from './models/users';
// import { addMessage, formatTime } from './models/message';

// export default (socket) => {
//   socket.on('joinNewUser', ({ username }, callback) => {
//     const { error, user } = createUser(username, socket.id);
//     if (error) {
//       return callback(error);
//     }

//     const defaultRoom = getDefaultRoom();
//     const defaultRoomName = defaultRoom.name;

//     addUserToDefaultRoom(user.name);

//     socket.join(defaultRoomName);

// io.todefaultRoomName.emit('roomData',{room:defaultRoom,users:getUsersInRoom(defaultRoomName)});

//     return callback();
//   });

//   socket.on('joinToRoom', ({ roomName }) => {
//     socket.join(roomName);
//     const user = getUserBySocketId(socket.id);
//     if (user) {
//       addUserToRoom(user.name, roomName);
//     }
//   });

//   socket.on('newMessage', ({ message, roomName }) => {
//     const { time, ...rest } = message;
//     const formattedMessageTime = formatTime(time);
//     const newMessage = { time: formattedMessageTime, ...rest };
//     addMessage(newMessage);
//     io.to(roomName).emit('newMessage', newMessage);
//   });

//   socket.on('createRoom', ({ roomName }, callback) => {
//     const { error } = createRoom(roomName);
//     if (error) {
//       callback(error);
//     }

//     callback();
//   });

//   socket.on('disconnect', () => {
//     const user = getUserBySocketId(socket.id);
//     if (user) {
//       // removeUserFromRooms(user.name)
//       removeUser(user.guid);
//     }
//     socket.disconnect(true);
//   });
// };
