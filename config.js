module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000
  },
  post: {
    port: process.env.POST_PORT || 3002
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'JlIbM4Cjc2',
    password: process.env.MYSQL_PASS || 'WzaWxDS1sJ',
    database: process.env.MYSQL_DB || 'JlIbM4Cjc2',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001
  },
  cacheService: {
    host: process.env.REDIS_SRV_HOST || 'localhost',
    port: process.env.REDIS_SRV_PORT || 3003
  },
  redis: {
    host: process.env.REDIS_HOST || 'redis-17623.c258.us-east-1-4.ec2.cloud.redislabs.com',
    post: process.env.REDIS_PORT || '17623',
    password: process.env.REDIS_PASS || '1FN7wQilCd9yXyEGCvCeKpX7gdA5M579',
    db: process.env.REDIS_DB || 'test',
  }
}