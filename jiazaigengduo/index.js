var http = require('http');
var fs = require('fs');
var url = require('url')

var port = process.env.PORT || 8080;
var server = http.createServer(function (request, response) {
    var temp = url.parse(request.url, true)
    var path = temp.pathname;
    var query = temp.query;
    var method = request.method;
    let errors = {};
    console.log(path)
    console.log(query)

    if (method === "GET") {
        if (path === '/') {
            var string = fs.readFileSync('./index.html')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else if (path === '/style.css') {
            var string = fs.readFileSync('./style.css')
            response.setHeader('Content-Type', 'text/css')
            response.end(string)
        } else if (path === '/main.js') {
            var string = fs.readFileSync('./main.js')
            response.setHeader('Content-Type', 'application/javascript')
            response.end(string)
        } else {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end("找不到对应的路径，请在index.js中添加相应的路径")
        }

    } else if (method === "POST") {
        if(path === "/login"){
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        let body = [];
        request.on('data', function (chunk) {
            body.push(chunk)
        }).on('end', function () {
            body = Buffer.concat(body).toString();
            let parts = body.split('&');
            let username = parts[0].split('=')[1]
            let password = parts[1].split('=')[1]
            if(username.trim() ===""){
                errors['username'] = "用户名不能为空啊"
            }
            if(password === ""){
                errors['password'] = "密码不能为空"
            }
            if(Object.keys(errors).length >0){
                response.statusCode = 412;
                let string = JSON.stringify({errors:errors})
                response.end(string)
                return;
            }
            if (username === "arch") {
                if (password == "123456") {
                    response.end('Hello ' + username)
                } else {
                    response.statusCode = 412;
                    response.end('密码错误')
                }
            } else {
                response.statusCode = 404;
                response.end('用户名不存在');
            }
        })
        }else{
            response.statusCode = 404;
            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end('滚啊')
        }
    }
})

console.log(`listening at port:${port}`)

server.listen(port)