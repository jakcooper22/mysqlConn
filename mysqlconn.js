var http = require('http');
var fs  = require("fs");
var mysql = require('mysql');
var conn  = require('./connects.js');
var stuff = conn;

var con = mysql.createConnection({
  host: stuff.config.host,
  user: stuff.config.username,
  password: stuff.config.password,
  database: stuff.config.database
});

fs.readFile("index.html", function(err, data){


})

con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");
  con.query("select * from users", function (err, result, fields) {
  if (err) throw err;
    console.log(result);
  });
});

var temp1 = function() {return "empty" };

//add fetching mysql results in a var

http.createServer(function (req,res){

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    res.setHeader("Content-Type", "application/html");

    var reqUrl = req.url
    console.log(reqUrl);

    var mainPath = reqUrl.split('?')[0]
    console.log(mainPath);

    //var reqData = reqUrl.split('?')[1].split('=')
    //console.log(reqData);

    //var fileConts;
    //if (mainPath = "index"){
    //    fs.readFile("index.html", function(err,data){
    //        fileConts = data;
    //        console.log(fileConts);
    //    });

    //}else if (mainPath = "/index2"){
    //    fs.readFile("index2.html", function(err,data2){
    //        fileConts = data2;
    //        console.log(fileConts);
    //    });
    //};

    if (mainPath == "/"){
        fs.readFile("index.html", function(err, fileConts){
          res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
          res.write(fileConts);
          res.end();
          return;
        });
    }else if (mainPath == "/index2"){
        fs.readFile("index2.html", function(err,data){
            res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
            res.write(data);
            res.end();
            return;
        });
    //
    //
    };

}).listen(9000);

console.log('server runnin ??');
