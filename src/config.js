import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    port: process.env.PORT || 3000,
    url: process.env.URL || `http://localhost:${process.env.PORT || 3000}`,
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost/api-streaming',
  },

};

if (
  !config.server.port ||
  !config.server.pass ||
  !config.database.uri
) {
  console.error('Missing env variables');
  process.exit(1);
}

export default config;