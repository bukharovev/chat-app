"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _message = require("./models/message");

var _rooms = require("./models/rooms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const app = new _express.default();
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
  };
  app.use((0, _cors.default)(corsOptions)); // app.use(bodyParser.urlencoded({ extended: true }))
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
    const {
      username
    } = req.query;
    const rooms = (0, _rooms.getRoomsByUsername)(username);
    res.json({
      rooms
    });
  });
  app.get('/messages', (req, res) => {
    const {
      roomName
    } = req.query;

    if (!roomName) {
      res.json({
        error: 'name is empty'
      });
      return;
    }

    const messages = (0, _message.getMessagesByRoomName)(roomName);
    res.json({
      messages
    });
  });
  return app;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwiRXhwcmVzcyIsImNvcnNPcHRpb25zIiwib3JpZ2luIiwiY3JlZGVudGlhbHMiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJ1c2VybmFtZSIsInF1ZXJ5Iiwicm9vbXMiLCJqc29uIiwicm9vbU5hbWUiLCJlcnJvciIsIm1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7ZUFFZSxNQUFNO0FBQ25CLFFBQU1BLEdBQUcsR0FBRyxJQUFJQyxnQkFBSixFQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxJQUFBQSxNQUFNLEVBQUUsdUJBRFU7QUFFbEJDLElBQUFBLFdBQVcsRUFBRTtBQUZLLEdBQXBCO0FBSUFKLEVBQUFBLEdBQUcsQ0FBQ0ssR0FBSixDQUFRLG1CQUFLSCxXQUFMLENBQVIsRUFObUIsQ0FPbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRixFQUFBQSxHQUFHLENBQUNNLEdBQUosQ0FBUSxRQUFSLEVBQWtCLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzlCLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFlRixHQUFHLENBQUNHLEtBQXpCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLCtCQUFtQkYsUUFBbkIsQ0FBZDtBQUNBRCxJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBUztBQUFFRCxNQUFBQTtBQUFGLEtBQVQ7QUFDRCxHQUpEO0FBTUFYLEVBQUFBLEdBQUcsQ0FBQ00sR0FBSixDQUFRLFdBQVIsRUFBcUIsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDakMsVUFBTTtBQUFFSyxNQUFBQTtBQUFGLFFBQWVOLEdBQUcsQ0FBQ0csS0FBekI7O0FBQ0EsUUFBSSxDQUFDRyxRQUFMLEVBQWU7QUFDYkwsTUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVM7QUFBRUUsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBVDtBQUNBO0FBQ0Q7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHLG9DQUFzQkYsUUFBdEIsQ0FBakI7QUFDQUwsSUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVM7QUFBRUcsTUFBQUE7QUFBRixLQUFUO0FBQ0QsR0FSRDtBQVVBLFNBQU9mLEdBQVA7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuaW1wb3J0IHsgZ2V0TWVzc2FnZXNCeVJvb21OYW1lIH0gZnJvbSAnLi9tb2RlbHMvbWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRSb29tc0J5VXNlcm5hbWUgfSBmcm9tICcuL21vZGVscy9yb29tcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcbiAgY29uc3QgY29yc09wdGlvbnMgPSB7XG4gICAgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICBjcmVkZW50aWFsczogdHJ1ZSxcbiAgfTtcbiAgYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG4gIC8vIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG4gIC8vIGFwcC51c2Uoc2Vzc2lvbih7XG4gIC8vICAgc2VjcmV0OiAnc2VjcmV0IGtleScsXG4gIC8vICAgcmVzYXZlOiBmYWxzZSxcbiAgLy8gICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gIC8vIH0pKVxuXG4gIC8vIGFwcC5nZXQoJy9uZXdVc2VyJywgKHJlcSwgcmVzKSA9PiB7XG4gIC8vICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnF1ZXJ5XG4gIC8vICAgY29uc29sZS5sb2coJ25ld1VzZXIgdXNlcm5hbWUgPSAnLCB1c2VybmFtZSlcbiAgLy8gICByZXEuc2Vzc2lvbi51c2VybmFtZSA9IHVzZXJuYW1lXG4gIC8vICAgcmVzLnN0YXR1cygyMDApXG4gIC8vIH0pXG5cbiAgYXBwLmdldCgnL3Jvb21zJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IHJvb21zID0gZ2V0Um9vbXNCeVVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgICByZXMuanNvbih7IHJvb21zIH0pO1xuICB9KTtcblxuICBhcHAuZ2V0KCcvbWVzc2FnZXMnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IHJvb21OYW1lIH0gPSByZXEucXVlcnk7XG4gICAgaWYgKCFyb29tTmFtZSkge1xuICAgICAgcmVzLmpzb24oeyBlcnJvcjogJ25hbWUgaXMgZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlcyA9IGdldE1lc3NhZ2VzQnlSb29tTmFtZShyb29tTmFtZSk7XG4gICAgcmVzLmpzb24oeyBtZXNzYWdlcyB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFwcDtcbn07XG4iXX0=