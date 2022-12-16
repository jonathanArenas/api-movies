"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var movies = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: false,
    "default": 0
  },
  image: {
    type: String,
    required: true
  },
  released: {
    type: String,
    required: true
  }
});
var _default = _mongoose["default"].model('Movies_catalog', movies);
exports["default"] = _default;
//# sourceMappingURL=Movies_catalog.js.map