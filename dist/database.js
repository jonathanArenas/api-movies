"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("./config.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var db = _mongoose["default"].connection;
_mongoose["default"].set('strictQuery', true);
db.on('connecting', function () {
  console.log('Conectando a la base de datos 🟡');
});
db.on('connected', function () {
  console.log('Se ha conectado a la base de datos 🟢');
});
db.on('error', function () {
  console.log('Error al conectarse a la base 🔴');
});
var _default = function _default() {
  _mongoose["default"].connect(_config["default"].database.uri);
};
exports["default"] = _default;
//# sourceMappingURL=database.js.map