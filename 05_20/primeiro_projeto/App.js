// console.log("Segunda-feira")
let http = require("http")

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("Segunda-feira")
}).listen(5000)