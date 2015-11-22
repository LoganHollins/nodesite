var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(80);


// var http = require('http');
// var fs = require('fs');
//
// const PORT=8080;
// const fileExtension = ".html"
// //We need a function which handles requests and send
// //TODO: maybe check if file exists without file extension before appending extension?
// function handleRequest(req, res){
//     if(containsFilename(req.url)){
//         req.url += "index" + fileExtension;
//     } else if (!validUrl(req.url)) {
//         req.url = urlRewrite(req.url);
//     }
//     var fileLocation = __dirname + req.url;
//
//     try{
//         // readFileSync returns buffer, but it is converted to a string immediately
//         // TODO: check if file exists instead of relying on readFileSync throwing an exception
//         var data = fs.readFileSync(fileLocation).toString("utf8")
//     } catch (err){
//         // simulates a 404
//         res.end("Invalid Request: " + req.url);
//     }
//     res.end(data);
// }
//
// // Create a server
// var server = http.createServer(handleRequest).listen(PORT, function(){
//     console.log("Server started on PORT:%s", PORT);
// });
// // Adds /html extension to file
// function urlRewrite(url){
//     return url + fileExtension;
// }
// // Finds if there is a file extension on the url
// function validUrl(url){
//     // Checks only the part of the url after the final slash ie. /data/index would check "index"
//     return url.substring(url.lastIndexOf('/'), url.length).lastIndexOf('.') != -1;
// }
// //Checks if the url has a filename at the end
// function containsFilename(url){
//     return url.substring(url.length -1, url.length) == "/";
// }
