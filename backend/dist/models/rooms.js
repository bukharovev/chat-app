"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoomsByUsername = exports.getUsersInRoom = exports.addUserToRoom = exports.addUserToDefaultRoom = exports.getRooms = exports.getDefaultRoom = exports.getRoom = exports.createRoom = void 0;
const defaultRoomName = 'general';
const usersInRoom = new Set();
const rooms = [{
  name: defaultRoomName,
  usersInRoom
}, {
  name: 'ruby',
  usersInRoom
}, {
  name: 'elixir',
  usersInRoom
}];

const createRoom = roomName => {
  const name = roomName.trim().toLowerCase();
  const roomIsExist = !!rooms.find(room => room.name === name);

  if (roomIsExist) {
    return {
      error: 'This room name is already taken. Please use different one.'
    };
  }

  const newRoom = {
    name,
    usersInRoom
  };
  rooms.push(newRoom);
  return newRoom;
};

exports.createRoom = createRoom;

const getRoom = name => rooms.find(room => room.name === name);

exports.getRoom = getRoom;

const getDefaultRoom = () => getRoom(defaultRoomName);

exports.getDefaultRoom = getDefaultRoom;

const getRooms = () => rooms;

exports.getRooms = getRooms;

const addUserToDefaultRoom = username => {
  const defaultRoom = getDefaultRoom();
  defaultRoom.usersInRoom.add(username);
};

exports.addUserToDefaultRoom = addUserToDefaultRoom;

const addUserToRoom = (username, roomName) => {
  const room = getRoom(roomName);
  room.usersInRoom.add(username);
};

exports.addUserToRoom = addUserToRoom;

const getUsersInRoom = roomName => {
  const room = getRoom(roomName);
  return room.usersInRoom;
}; // export const removeUserFromRooms = (username) => (
//   rooms = rooms.map((room) => {
//     room.usersInRoom = room.usersInRoom.filter((name) => name !== username);
//     return room;
//   })
// );


exports.getUsersInRoom = getUsersInRoom;

const getRoomsByUsername = username => rooms.filter(room => room.usersInRoom.has(username));

exports.getRoomsByUsername = getRoomsByUsername;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcm9vbXMuanMiXSwibmFtZXMiOlsiZGVmYXVsdFJvb21OYW1lIiwidXNlcnNJblJvb20iLCJTZXQiLCJyb29tcyIsIm5hbWUiLCJjcmVhdGVSb29tIiwicm9vbU5hbWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyb29tSXNFeGlzdCIsImZpbmQiLCJyb29tIiwiZXJyb3IiLCJuZXdSb29tIiwicHVzaCIsImdldFJvb20iLCJnZXREZWZhdWx0Um9vbSIsImdldFJvb21zIiwiYWRkVXNlclRvRGVmYXVsdFJvb20iLCJ1c2VybmFtZSIsImRlZmF1bHRSb29tIiwiYWRkIiwiYWRkVXNlclRvUm9vbSIsImdldFVzZXJzSW5Sb29tIiwiZ2V0Um9vbXNCeVVzZXJuYW1lIiwiZmlsdGVyIiwiaGFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxlQUFlLEdBQUcsU0FBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsR0FBSixFQUFwQjtBQUVBLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQUVDLEVBQUFBLElBQUksRUFBRUosZUFBUjtBQUF5QkMsRUFBQUE7QUFBekIsQ0FEWSxFQUVaO0FBQUVHLEVBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCSCxFQUFBQTtBQUFoQixDQUZZLEVBR1o7QUFBRUcsRUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JILEVBQUFBO0FBQWxCLENBSFksQ0FBZDs7QUFNTyxNQUFNSSxVQUFVLEdBQUlDLFFBQUQsSUFBYztBQUN0QyxRQUFNRixJQUFJLEdBQUdFLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsV0FBaEIsRUFBYjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDLENBQUNOLEtBQUssQ0FBQ08sSUFBTixDQUFZQyxJQUFELElBQVVBLElBQUksQ0FBQ1AsSUFBTCxLQUFjQSxJQUFuQyxDQUF0Qjs7QUFFQSxNQUFJSyxXQUFKLEVBQWlCO0FBQ2YsV0FBTztBQUFFRyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFQO0FBQ0Q7O0FBRUQsUUFBTUMsT0FBTyxHQUFHO0FBQ2RULElBQUFBLElBRGM7QUFFZEgsSUFBQUE7QUFGYyxHQUFoQjtBQUtBRSxFQUFBQSxLQUFLLENBQUNXLElBQU4sQ0FBV0QsT0FBWDtBQUVBLFNBQU9BLE9BQVA7QUFDRCxDQWhCTTs7OztBQWtCQSxNQUFNRSxPQUFPLEdBQUlYLElBQUQsSUFBVUQsS0FBSyxDQUFDTyxJQUFOLENBQVlDLElBQUQsSUFBVUEsSUFBSSxDQUFDUCxJQUFMLEtBQWNBLElBQW5DLENBQTFCOzs7O0FBRUEsTUFBTVksY0FBYyxHQUFHLE1BQU1ELE9BQU8sQ0FBQ2YsZUFBRCxDQUFwQzs7OztBQUVBLE1BQU1pQixRQUFRLEdBQUcsTUFBTWQsS0FBdkI7Ozs7QUFFQSxNQUFNZSxvQkFBb0IsR0FBSUMsUUFBRCxJQUFjO0FBQ2hELFFBQU1DLFdBQVcsR0FBR0osY0FBYyxFQUFsQztBQUNBSSxFQUFBQSxXQUFXLENBQUNuQixXQUFaLENBQXdCb0IsR0FBeEIsQ0FBNEJGLFFBQTVCO0FBQ0QsQ0FITTs7OztBQUtBLE1BQU1HLGFBQWEsR0FBRyxDQUFDSCxRQUFELEVBQVdiLFFBQVgsS0FBd0I7QUFDbkQsUUFBTUssSUFBSSxHQUFHSSxPQUFPLENBQUNULFFBQUQsQ0FBcEI7QUFDQUssRUFBQUEsSUFBSSxDQUFDVixXQUFMLENBQWlCb0IsR0FBakIsQ0FBcUJGLFFBQXJCO0FBQ0QsQ0FITTs7OztBQUtBLE1BQU1JLGNBQWMsR0FBSWpCLFFBQUQsSUFBYztBQUMxQyxRQUFNSyxJQUFJLEdBQUdJLE9BQU8sQ0FBQ1QsUUFBRCxDQUFwQjtBQUNBLFNBQU9LLElBQUksQ0FBQ1YsV0FBWjtBQUNELENBSE0sQyxDQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFTyxNQUFNdUIsa0JBQWtCLEdBQUlMLFFBQUQsSUFDaENoQixLQUFLLENBQUNzQixNQUFOLENBQWNkLElBQUQsSUFBVUEsSUFBSSxDQUFDVixXQUFMLENBQWlCeUIsR0FBakIsQ0FBcUJQLFFBQXJCLENBQXZCLENBREsiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0Um9vbU5hbWUgPSAnZ2VuZXJhbCc7XG5jb25zdCB1c2Vyc0luUm9vbSA9IG5ldyBTZXQoKTtcblxuY29uc3Qgcm9vbXMgPSBbXG4gIHsgbmFtZTogZGVmYXVsdFJvb21OYW1lLCB1c2Vyc0luUm9vbSB9LFxuICB7IG5hbWU6ICdydWJ5JywgdXNlcnNJblJvb20gfSxcbiAgeyBuYW1lOiAnZWxpeGlyJywgdXNlcnNJblJvb20gfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb29tID0gKHJvb21OYW1lKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByb29tTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qgcm9vbUlzRXhpc3QgPSAhIXJvb21zLmZpbmQoKHJvb20pID0+IHJvb20ubmFtZSA9PT0gbmFtZSk7XG5cbiAgaWYgKHJvb21Jc0V4aXN0KSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdUaGlzIHJvb20gbmFtZSBpcyBhbHJlYWR5IHRha2VuLiBQbGVhc2UgdXNlIGRpZmZlcmVudCBvbmUuJyB9O1xuICB9XG5cbiAgY29uc3QgbmV3Um9vbSA9IHtcbiAgICBuYW1lLFxuICAgIHVzZXJzSW5Sb29tLFxuICB9O1xuXG4gIHJvb21zLnB1c2gobmV3Um9vbSk7XG5cbiAgcmV0dXJuIG5ld1Jvb207XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Um9vbSA9IChuYW1lKSA9PiByb29tcy5maW5kKChyb29tKSA9PiByb29tLm5hbWUgPT09IG5hbWUpO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFJvb20gPSAoKSA9PiBnZXRSb29tKGRlZmF1bHRSb29tTmFtZSk7XG5cbmV4cG9ydCBjb25zdCBnZXRSb29tcyA9ICgpID0+IHJvb21zO1xuXG5leHBvcnQgY29uc3QgYWRkVXNlclRvRGVmYXVsdFJvb20gPSAodXNlcm5hbWUpID0+IHtcbiAgY29uc3QgZGVmYXVsdFJvb20gPSBnZXREZWZhdWx0Um9vbSgpO1xuICBkZWZhdWx0Um9vbS51c2Vyc0luUm9vbS5hZGQodXNlcm5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFVzZXJUb1Jvb20gPSAodXNlcm5hbWUsIHJvb21OYW1lKSA9PiB7XG4gIGNvbnN0IHJvb20gPSBnZXRSb29tKHJvb21OYW1lKTtcbiAgcm9vbS51c2Vyc0luUm9vbS5hZGQodXNlcm5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzSW5Sb29tID0gKHJvb21OYW1lKSA9PiB7XG4gIGNvbnN0IHJvb20gPSBnZXRSb29tKHJvb21OYW1lKTtcbiAgcmV0dXJuIHJvb20udXNlcnNJblJvb207XG59O1xuXG4vLyBleHBvcnQgY29uc3QgcmVtb3ZlVXNlckZyb21Sb29tcyA9ICh1c2VybmFtZSkgPT4gKFxuLy8gICByb29tcyA9IHJvb21zLm1hcCgocm9vbSkgPT4ge1xuLy8gICAgIHJvb20udXNlcnNJblJvb20gPSByb29tLnVzZXJzSW5Sb29tLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gdXNlcm5hbWUpO1xuLy8gICAgIHJldHVybiByb29tO1xuLy8gICB9KVxuLy8gKTtcblxuZXhwb3J0IGNvbnN0IGdldFJvb21zQnlVc2VybmFtZSA9ICh1c2VybmFtZSkgPT4gKFxuICByb29tcy5maWx0ZXIoKHJvb20pID0+IHJvb20udXNlcnNJblJvb20uaGFzKHVzZXJuYW1lKSlcbik7XG4iXX0=