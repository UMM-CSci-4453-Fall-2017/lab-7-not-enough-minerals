dbf = require('./resources/dbf-setup.js');
var credentials = require('./resources/credentials.json');
var mysql = require('mysql');
var express = require('express');


var button_properties = [];

/*
var dataBaseSelect = function() {
  var sql = "USE " + credentials.user;
  return dbf.query(mysql.format(sql));
}
*/

var getButtons = function() {
  var sql = "SELECT * from " + credentials.user + ".till_buttons";
  return dbf.query(mysql.format(sql));
}

var processDBFs = function(queryResults) {
  button_properties = queryResults;
  console.log(button_properties);
  return(button_properties);
}

dbf = getButtons()
.then(processDBFs)
.then(dbf.releaseDBF);

app = express(),
port = process.env.PORT || 1337;

// var buttons=[{"buttonID":1,"left":10,"top":70,"width":100,"label":"hotdogs","invID":1},{"buttonID":2,"left":110,"top":70,"width":100,"label":"hambugers","invID":2},{"buttonID":3,"left":210,"top":70,"width":100,"label":"bannanas","invID":3},{"buttonID":4,"left":10,"top":120,"width":100,"label":"milkduds","invID":4}]; //static buttons

app.use(express.static(__dirname + '/public')); //Serves the web pages
app.get("/buttons",function(req,res){ // handles the /buttons API
  res.send(button_properties);
});

app.listen(port);
