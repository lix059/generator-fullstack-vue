var ioSocket = require('socket.io');
var redis = require('redis');
var config = require('./config/environment');
var io;

exports.initSocket = function(server){
    //socketNotify = ioSocket(server);

    io = require('socket.io')(server, {
        serveClient:false,
        path: '/trd.socket'
    });

    var pubClient = redis.createClient(config.redis.port, config.redis.host, config.redis.options);
    var subClient = redis.createClient(config.redis.port, config.redis.host, config.redis.options);
    io.on('connection', function (socket) {
      console.log('connection on');
      //socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
        pubClient.publish('socket#message', '9000  ' + data.my);
      });
      subClient.on("message", function (channel, message) {
        console.log("sub channel " + channel + ": " + message);
      });
    });
    subClient.subscribe("socket#message");

    // socketNotify.on('connection', function(socket) {
    //     console.log('connection  on ' + socket);
    //     socket.on('notify', function(data) {
    //         console.log(data);
    //     });
    // });

    // socketNotify.on('disconnect', function () {
    //     delete socketNotify;
    //     console.log('disconnect socket');
    // });
}

exports.notifySocket = function(data){
    io.emit('dataNotify',data);
}