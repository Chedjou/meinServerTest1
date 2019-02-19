const express= require('express')

const app=express()


app.get('/', function(req, res){
  res.send("hallo! Es ist nur ein test")
})

app.listen(3003, function(){

  console.log ("server aktiv")
})