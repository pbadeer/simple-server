var connect = require('connect');
var serveStatic = require('serve-static');
var port = 5000;

connect().use(serveStatic(__dirname)).listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});