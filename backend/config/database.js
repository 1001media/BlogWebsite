module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host : env('DATABASE_HOST'),
        srv: env('DATABASE_SRV', true),
        port: env('DATABASE_PORT', 27017),
        database : env('DATABASE_NAME'),
        username: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD'),
        uri : env("DATABASE_URI")
      },
      options: {
        authenticationDatabase: env('AUTH_DATABASE', null),
        ssl: true
      },
    },
  },
});
