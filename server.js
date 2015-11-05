var http = require('http');
var fs = require('fs');

const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(req, res){
    var fileLocation = __dirname + req.url;
    try{
        // readFileSync returns buffer, but it is converted to a string immediatly
        var data = fs.readFileSync(fileLocation).toString("utf8")
    } catch (err){
        // simulates a 404
        res.end("Invalid Request");
    }
    res.end(data);
}

//Create a server
var server = http.createServer(handleRequest).listen(PORT);
