/**
 * Created by yeonghuni on 2014. 3. 19..
 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('what 4');
  console.log('what 3');
  console.log('what 5');
  res.end('Hello111 World\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');