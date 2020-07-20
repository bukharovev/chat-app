"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserBySocketId = exports.getUsers = exports.getUser = exports.removeUser = exports.createUser = void 0;

var _uuid = require("uuid");

let users = [];

const createUser = (name, socketid = '') => {
  if (!name) {
    return {
      error: 'username can`t be blank'
    };
  }

  const username = name.trim().toLowerCase();
  const userAlreadyExist = !!users.find(user => user.name === username);

  if (userAlreadyExist) {
    return {
      error: 'username is taken'
    };
  }

  const newUser = {
    guid: (0, _uuid.v4)(),
    name: username,
    socketid
  };
  users.push(newUser);
  return {
    user: newUser
  };
};

exports.createUser = createUser;

const removeUser = guid => {
  users = users.filter(user => user.guid !== guid);
};

exports.removeUser = removeUser;

const getUser = guid => users.find(user => user.guid === guid);

exports.getUser = getUser;

const getUsers = () => users;

exports.getUsers = getUsers;

const getUserBySocketId = socketid => users.find(user => user.socketid === socketid);

exports.getUserBySocketId = getUserBySocketId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlcnMuanMiXSwibmFtZXMiOlsidXNlcnMiLCJjcmVhdGVVc2VyIiwibmFtZSIsInNvY2tldGlkIiwiZXJyb3IiLCJ1c2VybmFtZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInVzZXJBbHJlYWR5RXhpc3QiLCJmaW5kIiwidXNlciIsIm5ld1VzZXIiLCJndWlkIiwicHVzaCIsInJlbW92ZVVzZXIiLCJmaWx0ZXIiLCJnZXRVc2VyIiwiZ2V0VXNlcnMiLCJnZXRVc2VyQnlTb2NrZXRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaOztBQUVPLE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxJQUFELEVBQU9DLFFBQVEsR0FBRyxFQUFsQixLQUF5QjtBQUNqRCxNQUFJLENBQUNELElBQUwsRUFBVztBQUNULFdBQU87QUFBRUUsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBUDtBQUNEOztBQUVELFFBQU1DLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxJQUFMLEdBQVlDLFdBQVosRUFBakI7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsSUFBTixDQUFZQyxJQUFELElBQVVBLElBQUksQ0FBQ1IsSUFBTCxLQUFjRyxRQUFuQyxDQUEzQjs7QUFFQSxNQUFJRyxnQkFBSixFQUFzQjtBQUNwQixXQUFPO0FBQUVKLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQVA7QUFDRDs7QUFFRCxRQUFNTyxPQUFPLEdBQUc7QUFDZEMsSUFBQUEsSUFBSSxFQUFFLGVBRFE7QUFFZFYsSUFBQUEsSUFBSSxFQUFFRyxRQUZRO0FBR2RGLElBQUFBO0FBSGMsR0FBaEI7QUFNQUgsRUFBQUEsS0FBSyxDQUFDYSxJQUFOLENBQVdGLE9BQVg7QUFFQSxTQUFPO0FBQUVELElBQUFBLElBQUksRUFBRUM7QUFBUixHQUFQO0FBQ0QsQ0FyQk07Ozs7QUF1QkEsTUFBTUcsVUFBVSxHQUFJRixJQUFELElBQVU7QUFDbENaLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDZSxNQUFOLENBQWNMLElBQUQsSUFBVUEsSUFBSSxDQUFDRSxJQUFMLEtBQWNBLElBQXJDLENBQVI7QUFDRCxDQUZNOzs7O0FBSUEsTUFBTUksT0FBTyxHQUFJSixJQUFELElBQVVaLEtBQUssQ0FBQ1MsSUFBTixDQUFZQyxJQUFELElBQVVBLElBQUksQ0FBQ0UsSUFBTCxLQUFjQSxJQUFuQyxDQUExQjs7OztBQUVBLE1BQU1LLFFBQVEsR0FBRyxNQUFNakIsS0FBdkI7Ozs7QUFFQSxNQUFNa0IsaUJBQWlCLEdBQUlmLFFBQUQsSUFBY0gsS0FBSyxDQUFDUyxJQUFOLENBQVlDLElBQUQsSUFBVUEsSUFBSSxDQUFDUCxRQUFMLEtBQWtCQSxRQUF2QyxDQUF4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5sZXQgdXNlcnMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSAobmFtZSwgc29ja2V0aWQgPSAnJykgPT4ge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ3VzZXJuYW1lIGNhbmB0IGJlIGJsYW5rJyB9O1xuICB9XG5cbiAgY29uc3QgdXNlcm5hbWUgPSBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCB1c2VyQWxyZWFkeUV4aXN0ID0gISF1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLm5hbWUgPT09IHVzZXJuYW1lKTtcblxuICBpZiAodXNlckFscmVhZHlFeGlzdCkge1xuICAgIHJldHVybiB7IGVycm9yOiAndXNlcm5hbWUgaXMgdGFrZW4nIH07XG4gIH1cblxuICBjb25zdCBuZXdVc2VyID0ge1xuICAgIGd1aWQ6IHV1aWR2NCgpLFxuICAgIG5hbWU6IHVzZXJuYW1lLFxuICAgIHNvY2tldGlkLFxuICB9O1xuXG4gIHVzZXJzLnB1c2gobmV3VXNlcik7XG5cbiAgcmV0dXJuIHsgdXNlcjogbmV3VXNlciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVVzZXIgPSAoZ3VpZCkgPT4ge1xuICB1c2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5ndWlkICE9PSBndWlkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKGd1aWQpID0+IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZ3VpZCA9PT0gZ3VpZCk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VycyA9ICgpID0+IHVzZXJzO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5U29ja2V0SWQgPSAoc29ja2V0aWQpID0+IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuc29ja2V0aWQgPT09IHNvY2tldGlkKTtcbiJdfQ==