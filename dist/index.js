"use strict";

var _server = require("./server");
var _config = _interopRequireDefault(require("./config"));
var _database = _interopRequireDefault(require("./database"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _database["default"])();
_server.server.start({
  port: _config["default"].server.port
}, function (_ref) {
  var port = _ref.port;
  console.log('Server running!!');
});
//# sourceMappingURL=index.js.map