const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const server = express();
const result = require('./libs/result');
const jwt = require('./libs/token');

require('./utils/websocket')

server.use(bodyParser.json({limit:'200mb'}))
server.use(bodyParser.urlencoded({limit:'200mb', extended: false }));
server.use('/public', express.static('public'))

server.use(cookieParser());

// 免验证路由
const noLogin = ['/mobile/login', '/index/login', '/admin/login', '/index/register', '/index/captcha', '/admin/captcha']

//the cores config
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        if (noLogin.includes(req.url)) {
            next();
        } else {
            let token = req.headers.authorization;
            if (jwt.checkToken(token)) {
                next();
            } else {
                res.send(result.fail(401, '验证失败'))
            }
        }
    }
});
server.listen(3333, () => {
    console.log("正在监听3333端口");
});
server.use('/', require('./src/mobile/index')())
server.use('/', require('./src/index/index')())
server.use('/', require('./src/admin/index')())
server.use('/', require('./src/public/index')())