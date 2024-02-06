const fs = require('fs');
const http = require('http');
// const url = require('url');

const server = http.createServer(function(req, res){

    if(req.url=='/'){
        let data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    } else if (req.url=='/about.html'){
        let data = fs.readFileSync('about.html', 'utf8');
        res.end(data);
    } else if (req.url=='/contact.html') {
        let data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);
    } else if (req.url == '/file-write.html') {
        let error = fs.writeFileSync('demo.txt', 'hello world');
        let data = fs.readFileSync('file-write.html', 'utf8');
        res.end(data);
        res.end(error);
    }

});

server.listen(5500);
console.log("server has run successfully");