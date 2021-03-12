const express = require('express');
const constroller = require('./constroller/Login')
const constroller2 = require('./constroller/Captcha')


const route = express.Router(); //创建路由路径的链式路由句柄。
//get homePage datas  apidoc -i src/ -o public/apidoc


/**
 * @api {get} /index/my/userinfo 信息修改
 * @apiDescription 信息修改
 * @apiGroup PC端 个人中心
 * @apiParam {int} id 用户id
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {
    "data": {
        "list": [],
        "total": 3,
        "pageSize": "10",
        "currPage": "3"
    },
    "code": 200,
    "success": true,
    "message": "请求成功"
 }
 * @apiSampleRequest http://localhost:3333:/index/my/userinfo
 * @apiVersion 1.0.0
 */
// 我的信息
route.post('/index/my/setUserInfo', (req, res) => {
    constroller7.setUserInfo(req, res);
});
module.exports = () => {
    return route;
}
