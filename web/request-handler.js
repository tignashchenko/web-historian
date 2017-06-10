var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');

exports.handleRequest = function (req, res) {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('/Users/student/code/hrsf77-web-historian/web/public/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
};


// '/Users/student/code/hrsf77-web-historian/web/public/index.html'

// __dirname + '/public/index.html'