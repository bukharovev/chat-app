import Express from 'express';
import cors from 'cors';

import { getMessagesByRoomName } from './models/message';
import { getRoomsByUsername } from './models/rooms';

export default () => {
  const app = new Express();
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  app.use(cors(corsOptions));
  // app.use(bodyParser.urlencoded({ extended: true }))
  // app.use(session({
  //   secret: 'secret key',
  //   resave: false,
  //   saveUninitialized: false,
  // }))

  // app.get('/newUser', (req, res) => {
  //   const { username } = req.query
  //   console.log('newUser username = ', username)
  //   req.session.username = username
  //   res.status(200)
  // })

  app.get('/rooms', (req, res) => {
    const { username } = req.query;
    const rooms = getRoomsByUsername(username);
    res.json({ rooms });
  });

  app.get('/messages', (req, res) => {
    const { roomName } = req.query;
    if (!roomName) {
      res.json({ error: 'name is empty' });
      return;
    }
    const messages = getMessagesByRoomName(roomName);
    res.json({ messages });
  });

  return app;
};
