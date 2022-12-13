import dotenv from 'dotenv';

dotenv.config()

const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/api-streaming',
  },

};

if (
  !config.server.port ||
  !config.database.uri
) {
  console.error('Missing env variables');
  process.exit(1);
}

export default config;