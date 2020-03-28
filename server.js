 
var express = require("express");

var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/src/css'));
app.use('/js', express.static(__dirname + '/public/src/js'));
app.use('/images', express.static(__dirname + '/public/src/images'));

var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
