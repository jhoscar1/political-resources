var express = require('express');
var routes = require('./routes/route');
//Express framework
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

app.listen(3000, function(){
  console.log("Server running...");
});
