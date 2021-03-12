const express = require('express');
const constroller = require('./constroller/Login')
const constroller2 = require('./constroller/Captcha')


const route = express.Router(); //创建路由路径的链式路由句柄。
//get homePage datas  apidoc -i src/ -o public/apidoc



/**
 * @api {get} /admin/captcha 验证码
 * @apiDescription 验证码
 * @apiName captcha
 * @apiGroup PC端 用户
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
{
    "data": {
        "src": "<svg></svg>",
        "unicode": 86726780
    },
    "code": 200,
    "success": true,
    "message": "请求成功"
}
 * @apiSampleRequest http://localhost:3333/admin/captcha
 * @apiVersion 1.0.0
 */
// 验证码
route.get('/admin/captcha', (req, res) => {
    constroller2.captcha(req, res);
});

/**
 * @api {post} /admin/login 用户登录
 * @apiDescription 用户登录
 * @apiName submit-login
 * @apiGroup PC端 用户
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} code 验证码
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {"data":{"id":1,"username":"157170024","nickname":"不知道s","figure_url":"\\uploads\\user\\20201233\\4837cc15de1c6a0e8fda84feb7417f71.jpg","email":"703669046@qq.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MDYzNDgzLCJleHAiOjE2MTQwNjUyODN9.BOjUNKhX1y-uXnmv9sesYuWOiYyRi-o738Sc425c_ME"},"code":200,"success":true,"message":"请求成功"}
 * @apiSampleRequest http://localhost:3333/admin/login
 * @apiVersion 1.0.0
 */
// 登录
route.post('/admin/login', (req, res) => {
    constroller.userLogin(req, res);
});
module.exports = () => {
    return route;
}
