var httpProxy = require('http-proxy'),
    https = require('https'),
    fs = require('fs');

// get certificates ready
var privateKey = fs.readFileSync('privkey.pem').toString();
var certificate = fs.readFileSync('newcert.pem').toString();

var options = {
    key : privateKey,
    cert : certificate
}

var proxy  = httpProxy.createProxyServer({});

https.createServer(options, function(req, res) {
    proxy.web(req, res, { target : "http://localhost:8081" });
}).listen(8443);

