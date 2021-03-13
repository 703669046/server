const express = require('express');
const constroller = require('./constroller/Login')
const constroller2 = require('./constroller/Captcha')
const constroller3 = require('./constroller/Auth')
const constroller4 = require('./constroller/User')
const constroller5 = require('./constroller/Admin')
const constroller6 = require('./constroller/Post')


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
 * @apiGroup admin 用户
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

/**
 * @api {get} /admin/menutlist 菜单列表
 * @apiDescription 菜单列表
 * @apiName admin 菜单列表
 * @apiGroup admin 菜单管理
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {"data":{"id":1,"username":"157170024","nickname":"不知道s","figure_url":"\\uploads\\user\\20201233\\4837cc15de1c6a0e8fda84feb7417f71.jpg","email":"703669046@qq.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MDYzNDgzLCJleHAiOjE2MTQwNjUyODN9.BOjUNKhX1y-uXnmv9sesYuWOiYyRi-o738Sc425c_ME"},"code":200,"success":true,"message":"请求成功"}
 * @apiSampleRequest http://localhost:3333/admin/menutlist
 * @apiVersion 1.0.0
 */
// 登录
route.get('/admin/menutlist', (req, res) => {
    constroller3.getMenutLists(req, res);
});


/**
 * @api {get} /admin/userlist 用户列表
 * @apiDescription 用户列表
 * @apiName 用户列表
 * @apiGroup admin 用户列表
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {"data":{"id":1,"username":"157170024","nickname":"不知道s","figure_url":"\\uploads\\user\\20201233\\4837cc15de1c6a0e8fda84feb7417f71.jpg","email":"703669046@qq.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MDYzNDgzLCJleHAiOjE2MTQwNjUyODN9.BOjUNKhX1y-uXnmv9sesYuWOiYyRi-o738Sc425c_ME"},"code":200,"success":true,"message":"请求成功"}
 * @apiSampleRequest http://localhost:3333/admin/userlist
 * @apiVersion 1.0.0
 */
// 登录
route.get('/admin/userlist', (req, res) => {
    constroller4.getUserList(req, res);
});

/**
 * @api {get} /admin/adminlist 管理员列表
 * @apiDescription 管理员列表
 * @apiName 管理员列表
 * @apiGroup admin 管理员列表
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {"data":{"id":1,"username":"157170024","nickname":"不知道s","figure_url":"\\uploads\\user\\20201233\\4837cc15de1c6a0e8fda84feb7417f71.jpg","email":"703669046@qq.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MDYzNDgzLCJleHAiOjE2MTQwNjUyODN9.BOjUNKhX1y-uXnmv9sesYuWOiYyRi-o738Sc425c_ME"},"code":200,"success":true,"message":"请求成功"}
 * @apiSampleRequest http://localhost:3333/admin/adminlist
 * @apiVersion 1.0.0
 */
// 登录
route.get('/admin/adminlist', (req, res) => {
    constroller5.getAdminList(req, res);
});

/**
 * @api {get} /admin/postListPage 帖子分页查询
 * @apiDescription 分页查询
 * @apiGroup adin 帖子
 * @apiParam {int} id 类型
 * @apiParam {int} pageSize 条数
 * @apiParam {int} currPage 当前页
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
 * @apiSampleRequest http://localhost:3333/admin/postListPage
 * @apiVersion 1.0.0
 */
// 帖子分页查询
route.get('/admin/postListPage', (req, res) => {
    constroller6.postPageList(req, res);
});

/**
 * @api {get} /admin/postListPage 帖子详情
 * @apiDescription 详情
 * @apiGroup adin 帖子
 * @apiParam {int} id id
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
 * @apiSampleRequest http://localhost:3333/admin/postListPage
 * @apiVersion 1.0.0
 */
// 帖子详情
route.get('/admin/postInfo', (req, res) => {
    constroller6.getPostInfo(req, res);
});

/**
 * @api {post} /admin/postapproval 帖子审批
 * @apiDescription 审批
 * @apiGroup adin 帖子
 * @apiParam {int} id id
 * @apiParam {int} type 审批结果
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
 * @apiSampleRequest http://localhost:3333/admin/postapproval
 * @apiVersion 1.0.0
 */
// 帖子详情
route.post('/admin/postapproval', (req, res) => {
    constroller6.postApproval(req, res);
});
module.exports = () => {
    return route;
}
