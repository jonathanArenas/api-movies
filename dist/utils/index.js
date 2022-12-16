"use strict";

var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var jtw = require('jsonwebtoken');
var createToken = function createToken(data) {
  var token = jtw.sign(data, _config["default"].jwt.secret, {
    expiresIn: '1d'
  });
  return token;
};
module.exports = createToken;
//# sourceMappingURL=index.js.map