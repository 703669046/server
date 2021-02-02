const mysql = require('mysql');
const connect = mysql.createPool({
    host: 'localhost', // db 数据库地址
    user: 'root',     // db 数据库用户名
    password: '123456',  //db 密码
    database: 'blogs'   // db 数据库名称
});

module.exports = connect;