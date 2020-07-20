import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (name, socketid = '') => {
  if (!name) {
    return { error: 'username can`t be blank' };
  }

  const username = name.trim().toLowerCase();
  const userAlreadyExist = !!users.find((user) => user.name === username);

  if (userAlreadyExist) {
    return { error: 'username is taken' };
  }

  const newUser = {
    guid: uuidv4(),
    name: username,
    socketid,
  };

  users.push(newUser);

  return { user: newUser };
};

export const removeUser = (guid) => {
  users = users.filter((user) => user.guid !== guid);
};

export const getUser = (guid) => users.find((user) => user.guid === guid);

export const getUsers = () => users;

export const getUserBySocketId = (socketid) => users.find((user) => user.socketid === socketid);
