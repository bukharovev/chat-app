const defaultRoomName = 'general';
const usersInRoom = new Set();

const rooms = [
  { name: defaultRoomName, usersInRoom },
  { name: 'ruby', usersInRoom },
  { name: 'elixir', usersInRoom },
];

export const createRoom = (roomName) => {
  const name = roomName.trim().toLowerCase();
  const roomIsExist = !!rooms.find((room) => room.name === name);

  if (roomIsExist) {
    return { error: 'This room name is already taken. Please use different one.' };
  }

  const newRoom = {
    name,
    usersInRoom,
  };

  rooms.push(newRoom);

  return newRoom;
};

export const getRoom = (name) => rooms.find((room) => room.name === name);

export const getDefaultRoom = () => getRoom(defaultRoomName);

export const getRooms = () => rooms;

export const addUserToDefaultRoom = (username) => {
  const defaultRoom = getDefaultRoom();
  defaultRoom.usersInRoom.add(username);
};

export const addUserToRoom = (username, roomName) => {
  const room = getRoom(roomName);
  room.usersInRoom.add(username);
};

export const getUsersInRoom = (roomName) => {
  const room = getRoom(roomName);
  return room.usersInRoom;
};

// export const removeUserFromRooms = (username) => (
//   rooms = rooms.map((room) => {
//     room.usersInRoom = room.usersInRoom.filter((name) => name !== username);
//     return room;
//   })
// );

export const getRoomsByUsername = (username) => (
  rooms.filter((room) => room.usersInRoom.has(username))
);
