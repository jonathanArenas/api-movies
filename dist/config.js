"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var config = {
  server: {
    port: process.env.PORT || 3000
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/api-streaming'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  }
};
if (!config.server.port || !config.database.uri || !config.jwt.secret) {
  console.error('Missing env variables');
  process.exit(1);
}
var _default = config;
exports["default"] = _default;
//# sourceMappingURL=config.js.map