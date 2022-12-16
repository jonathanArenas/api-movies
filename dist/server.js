"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;
var _graphqlYoga = require("graphql-yoga");
var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: _path["default"].join(__dirname, "graphql/schema.graphql"),
  resolvers: _resolvers["default"]
});
exports.server = server;
//# sourceMappingURL=server.js.map