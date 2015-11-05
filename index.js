var app = require('./server.js');

 var port = process.env.PORT || 5000;
 

app.listen(port);

console.log('Server now listening on port ' + port);
