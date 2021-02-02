const express = require('express');
const constroller = require('./constroller/Login')


const route = express.Router(); //创建路由路径的链式路由句柄。
//get homePage datas
route.post('/mobile/login', (req, res) => {
    constroller.userLogin(req, res);
});

module.exports = () => {
    return route;
}
