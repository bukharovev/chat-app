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
//     io.to(defaultRoomName).emit('roomData', { room: defaultRoom, users: getUsersInRoom(defaultRoomName) });
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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb2NrZXRNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8vIGltcG9ydCBpbyBmcm9tICcuLi9iaW4vc2VydmVyJztcblxuLy8gaW1wb3J0IHtcbi8vICAgY3JlYXRlUm9vbSwgYWRkVXNlclRvRGVmYXVsdFJvb20sIGFkZFVzZXJUb1Jvb20sIGdldFVzZXJzSW5Sb29tLCBnZXREZWZhdWx0Um9vbSxcbi8vIH0gZnJvbSAnLi9tb2RlbHMvcm9vbXMnO1xuLy8gaW1wb3J0IHsgY3JlYXRlVXNlciwgcmVtb3ZlVXNlciwgZ2V0VXNlckJ5U29ja2V0SWQgfSBmcm9tICcuL21vZGVscy91c2Vycyc7XG4vLyBpbXBvcnQgeyBhZGRNZXNzYWdlLCBmb3JtYXRUaW1lIH0gZnJvbSAnLi9tb2RlbHMvbWVzc2FnZSc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IChzb2NrZXQpID0+IHtcbi8vICAgc29ja2V0Lm9uKCdqb2luTmV3VXNlcicsICh7IHVzZXJuYW1lIH0sIGNhbGxiYWNrKSA9PiB7XG4vLyAgICAgY29uc3QgeyBlcnJvciwgdXNlciB9ID0gY3JlYXRlVXNlcih1c2VybmFtZSwgc29ja2V0LmlkKTtcbi8vICAgICBpZiAoZXJyb3IpIHtcbi8vICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgZGVmYXVsdFJvb20gPSBnZXREZWZhdWx0Um9vbSgpO1xuLy8gICAgIGNvbnN0IGRlZmF1bHRSb29tTmFtZSA9IGRlZmF1bHRSb29tLm5hbWU7XG5cbi8vICAgICBhZGRVc2VyVG9EZWZhdWx0Um9vbSh1c2VyLm5hbWUpO1xuXG4vLyAgICAgc29ja2V0LmpvaW4oZGVmYXVsdFJvb21OYW1lKTtcblxuLy8gICAgIGlvLnRvKGRlZmF1bHRSb29tTmFtZSkuZW1pdCgncm9vbURhdGEnLCB7IHJvb206IGRlZmF1bHRSb29tLCB1c2VyczogZ2V0VXNlcnNJblJvb20oZGVmYXVsdFJvb21OYW1lKSB9KTtcblxuLy8gICAgIHJldHVybiBjYWxsYmFjaygpO1xuLy8gICB9KTtcblxuLy8gICBzb2NrZXQub24oJ2pvaW5Ub1Jvb20nLCAoeyByb29tTmFtZSB9KSA9PiB7XG4vLyAgICAgc29ja2V0LmpvaW4ocm9vbU5hbWUpO1xuLy8gICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyQnlTb2NrZXRJZChzb2NrZXQuaWQpO1xuLy8gICAgIGlmICh1c2VyKSB7XG4vLyAgICAgICBhZGRVc2VyVG9Sb29tKHVzZXIubmFtZSwgcm9vbU5hbWUpO1xuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKHsgbWVzc2FnZSwgcm9vbU5hbWUgfSkgPT4ge1xuLy8gICAgIGNvbnN0IHsgdGltZSwgLi4ucmVzdCB9ID0gbWVzc2FnZTtcbi8vICAgICBjb25zdCBmb3JtYXR0ZWRNZXNzYWdlVGltZSA9IGZvcm1hdFRpbWUodGltZSk7XG4vLyAgICAgY29uc3QgbmV3TWVzc2FnZSA9IHsgdGltZTogZm9ybWF0dGVkTWVzc2FnZVRpbWUsIC4uLnJlc3QgfTtcbi8vICAgICBhZGRNZXNzYWdlKG5ld01lc3NhZ2UpO1xuLy8gICAgIGlvLnRvKHJvb21OYW1lKS5lbWl0KCduZXdNZXNzYWdlJywgbmV3TWVzc2FnZSk7XG4vLyAgIH0pO1xuXG4vLyAgIHNvY2tldC5vbignY3JlYXRlUm9vbScsICh7IHJvb21OYW1lIH0sIGNhbGxiYWNrKSA9PiB7XG4vLyAgICAgY29uc3QgeyBlcnJvciB9ID0gY3JlYXRlUm9vbShyb29tTmFtZSk7XG4vLyAgICAgaWYgKGVycm9yKSB7XG4vLyAgICAgICBjYWxsYmFjayhlcnJvcik7XG4vLyAgICAgfVxuXG4vLyAgICAgY2FsbGJhY2soKTtcbi8vICAgfSk7XG5cbi8vICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyQnlTb2NrZXRJZChzb2NrZXQuaWQpO1xuLy8gICAgIGlmICh1c2VyKSB7XG4vLyAgICAgICAvLyByZW1vdmVVc2VyRnJvbVJvb21zKHVzZXIubmFtZSlcbi8vICAgICAgIHJlbW92ZVVzZXIodXNlci5ndWlkKTtcbi8vICAgICB9XG4vLyAgICAgc29ja2V0LmRpc2Nvbm5lY3QodHJ1ZSk7XG4vLyAgIH0pO1xuLy8gfTtcbiJdfQ==