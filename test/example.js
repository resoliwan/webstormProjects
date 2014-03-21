/**
 * Created by yeonghuni on 2014. 3. 19..
 * 123
 *
 *  what i change source code but!!!
 *
 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('what 4');
  console.log('what 3');

  res.end('Hello111 World\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');