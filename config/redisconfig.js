const RedisServer = require('redis-server');
 
// Simply pass the port that you want a Redis server to listen on.
const redisServer = new RedisServer(6379);
 
redisServer.open((err) => {
  if (err === null) {
    // You may now connect a client to the Redis
    // server bound to port 6379.
  }
});

module.exports = redisServer;