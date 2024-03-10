export const config = {
  mysql: {
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    db: process.env.MYSQL_DB,
    logging: process.env.MYSQL_LOG_QUERY,
  },
  app: {
    port: process.env.port,
  },
};
