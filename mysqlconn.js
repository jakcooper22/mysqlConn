var mysql = require('mysql');
var conn  = require('./connects.js');
var stuff = conn;

var con = mysql.createConnection({
  host: stuff.config.host,
  user: stuff.config.username,
  password: stuff.config.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
