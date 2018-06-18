var util = require('util');
var http = require('http');
var port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var propertiesFile = process.env.CONFIG_FILE || '/etc/node-app/node-app.config';

var PropertiesReader = require('properties-reader');

var server = http.createServer(function (req, res) {

   req.on('data', function (data) {});
   req.on('end', function () {
      console.log("Invoked");
      var properties = PropertiesReader(propertiesFile);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html><head><title>' + properties.get('title') + '</title></head>');
      res.write('<body bgcolor="' + properties.get('color') + '"><br/><br/>');
      res.write('<div>');
      res.write('<h1>' + properties.get('title') + '</h1>');
      res.write('<p>' + properties.get('p1') + '</p>' );
      res.write('<p>' + properties.get('p2') + '</p><br/>' );
//      res.write('<p>Message coming from ENV_VAR: ' + process.env.BACKGROUND_MSG + '</p>');
      res.write('</div></body>');
      res.end('\n');
   });

});
console.log('Initializing Server on ' + ip + ':' + port);
server.listen(port,ip, function(){
   var address = server.address();
   console.log('Server running on ' + address.address + ':' + address.port);
});
