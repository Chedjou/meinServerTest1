const express= require('express')

const app=express()


app.get('/', function(req, res){
  res.send("hallo! Es ist nur ein test")
})

var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(80);
