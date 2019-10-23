let http = require('http');
let fs = require('fs')
let url = require('url')

let port = process.env.PORT || 8080;
let server = http.createServer(function(request,response){
    let temp = url.parse(request.url,true)
    let path = temp.pathname;
    let query = temp.query;
    let method = request.method;
    if(method === 'GET'){
        if(path === '/'){
            let string = fs.readFileSync('./homework37-2.html')
            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end(string)
        }else if(path === '/xxx'){
            if(query.yyy === "111" & query.zzz === "222"){
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end('Hello Ajax')
            }
        }
        else{
            console.log(query)
            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end('what?')
        }

    }
})

console.log('listening at port: ' + port)
server.listen(port)