var http = require('http');
var net = require('net');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function (req, res){
   if (req.method !== 'GET'){
       res.pipe("only get requests.");
   }
   
   var obj = url.parse(req.url, true);
   res.writeHead(200, { 'Content-Type': 'application/json' })  
   
   var date = new Date(obj.query.iso)
   
   if(obj.pathname == '/api/parsetime'){
       var test = {};
       
       
       test.hour = date.getHours();
       test.minute = date.getMinutes();
       test.second = date.getSeconds();
       
      res.end(JSON.stringify(test));
       
        
   }
   
   if(obj.pathname == '/api/unixtime'){
       
       var test = {};
       
       test.unixtime = date.getTime();
       res.end(JSON.stringify(test))
      
   }
    
    
})

server.listen(process.argv[2]);
