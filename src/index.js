import {server}   from './server'
import config from './config'
import database  from "./database";

database()

server.start( {port: config.server.port }, ( { port } ) => {
    console.log('Server running!!')
})