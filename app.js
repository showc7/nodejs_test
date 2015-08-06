var express = require('express')
var app = express()

console.log('started');

app.get('/', function(req,res){
	res.send('hello world');
})

app.listen(3000);
