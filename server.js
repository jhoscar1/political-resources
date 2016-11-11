var express = require('express');
var routes = require('./routes/route');
//Express framework
var app = express();

app.set('view engine', 'ejs');

//app.get('*', routes.allTheRest);


app.get('/', routes.home);
//app.get('/:issue', routes.issues);
app.get('*', routes.allTheRest);

app.listen(3000, function(){
  console.log("Server running...");
});
