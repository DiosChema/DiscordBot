var http = require('http');
var fs = require('fs');
example = require('./script');
const express = require('express');

//var server = http.createServer(function(req, res){
//});

const app = new express();


app.listen(3000, '127.0.0.1');