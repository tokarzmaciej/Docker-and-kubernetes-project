const Redis = require("ioredis");
const dbConnDataRedis = {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
};
const clientRedis = new Redis(dbConnDataRedis);

module.exports = clientRedis;
