const messages = [];

export const addMessage = (message) => messages.push(message);

export const formatTime = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMin = minutes <= 9 ? `0${minutes}` : minutes;
  const formattedTime = (hours > 12) ? `${hours - 12}:${formattedMin} PM` : `${hours}:${formattedMin} AM`;
  return formattedTime;
};

export const getMessagesByRoomName = (roomName) => (
  messages.filter((message) => message.roomName === roomName)
);

export const getMessages = () => messages;
