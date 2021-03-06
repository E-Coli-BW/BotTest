var http = require('http');
var fs = require('fs');

// process.env.PORT lets the port be set by Heroku
const PORT=process.env.PORT || 8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});