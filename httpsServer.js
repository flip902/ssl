var express = require('express');
var https = require('https');
var fs = require('fs');

// load certificates and create options
var privateKey = fs.readFileSync('privkey.pem').toString();
var certificate = fs.readFileSync('newcert.pem').toString();

var options = {
    key : privateKey,
    cert : certificate
}

// create express app and set up routing
var app = express();
app.get("*", function(req, res) {
    res.end("Thanks for calling securely!\n");
});

// start https server with optionsand express app
https.createServer(options, app).listen(8443, function() {
    console.log("Express server listening on port: " + 8443);
});