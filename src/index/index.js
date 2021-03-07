const express = require('express');
const constroller = require('./constroller/Login')
const constroller2 = require('./constroller/Captcha')
const constroller3 = require('./constroller/Post')
const constroller4 = require('./constroller/Praise')
const constroller5 = require('./constroller/Collect')
const constroller6 = require('./constroller/Comment')


const route = express.Router(); //创建路由路径的链式路由句柄。
//get homePage datas  apidoc -i src/ -o public/apidoc

/**
 * @api {get} /index/captcha 验证码
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
 * @apiSampleRequest http://localhost:3333/index/captcha
 * @apiVersion 1.0.0
 */
// 验证码
route.get('/index/captcha', (req, res) => {
    constroller2.captcha(req, res);
});

/**
 * @api {post} /index/login 用户登录
 * @apiDescription 用户登录
 * @apiName submit-login
 * @apiGroup PC端 用户
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} code 验证码
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {"data":{"id":1,"username":"157170024","nickname":"不知道s","figure_url":"\\uploads\\user\\20201233\\4837cc15de1c6a0e8fda84feb7417f71.jpg","email":"703669046@qq.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MDYzNDgzLCJleHAiOjE2MTQwNjUyODN9.BOjUNKhX1y-uXnmv9sesYuWOiYyRi-o738Sc425c_ME"},"code":200,"success":true,"message":"请求成功"}
 * @apiSampleRequest http://localhost:3333/index/login
 * @apiVersion 1.0.0
 */
// 登录
route.post('/index/login', (req, res) => {
    constroller.userLogin(req, res);
});

/**
 * @api {post} /index/register 用户注册
 * @apiDescription 用户注册
 * @apiGroup PC端 用户
 * @apiParam {string} username 用户名
 * @apiParam {string} email 邮箱地址
 * @apiParam {string} password 密码
 * @apiParam {string} passwords 确定密码
 * @apiParam {string} nickname 昵称
 * @apiParam {string} code 验证码
 * @apiSuccess {Object} result
 * @apiSuccessExample {json} Success-Response:
 {
    code: 200
    data: {}
    message: "注册成功"
    success: true
 }
 * @apiSampleRequest http://localhost:3333/index/login
 * @apiVersion 1.0.0
 */
// 注册
route.post('/index/register', (req, res) => {
    constroller.userRegister(req, res);
});

/**
 * @api {get} /index/postListPage 帖子分页查询
 * @apiDescription 分页查询
 * @apiGroup PC端 帖子
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
 * @apiSampleRequest http://localhost:3333/index/postListPage
 * @apiVersion 1.0.0
 */
// 帖子分页查询
route.get('/index/postListPage', (req, res) => {
    constroller3.postPageList(req, res);
});

/**
 * @api {get} /index/post/info 帖子详情
 * @apiDescription 帖子详情
 * @apiGroup PC端 帖子
 * @apiParam {int} myId 用户ID
 * @apiParam {int} id 帖子id
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
 * @apiSampleRequest http://localhost:3333/index/post/info
 * @apiVersion 1.0.0
 */
// 帖子分页查询
route.get('/index/post/info', (req, res) => {
    constroller3.postInfo(req, res);
});


/**
 * @api {post} /index/post/praises 帖子点赞
 * @apiDescription 帖子点赞
 * @apiGroup PC端 帖子
 * @apiParam {int} id 帖子id
 * @apiParam {Boolean} praiseType 操作类型
 * @apiParam {int} myId 用户id
 * @apiParam {int} userId 发布者id
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
 * @apiSampleRequest http://localhost:3333/index/post/praises
 * @apiVersion 1.0.0
 */
// 帖子点赞
route.post('/index/post/praises', (req, res) => {
    constroller4.setPraise(req, res);
});

/**
 * @api {post} /index/post/collect 帖子收藏
 * @apiDescription 帖子收藏
 * @apiGroup PC端 帖子
 * @apiParam {int} id 帖子id
 * @apiParam {Boolean} collectType 操作类型
 * @apiParam {int} myId 用户id
 * @apiParam {int} userId 发布者id
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
 * @apiSampleRequest http://localhost:3333/index/post/collect
 * @apiVersion 1.0.0
 */
// 帖子点赞 
route.post('/index/post/collect', (req, res) => {
    constroller5.setCollect(req, res);
});

/**
 * @api {post} /index/post/comment 帖子评论
 * @apiDescription 帖子评论
 * @apiGroup PC端 帖子
 * @apiParam {int} id 帖子id
 * @apiParam {Boolean} collectType 操作类型
 * @apiParam {int} myId 用户id
 * @apiParam {int} userId 发布者id
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
 * @apiSampleRequest http://localhost:3333/index/post/comment
 * @apiVersion 1.0.0
 */
// 帖子评论
route.post('/index/post/comment', (req, res) => {
    constroller6.addComment(req, res);
});


/**
 * @api {post} /index/post/commentList 帖子评论
 * @apiDescription 帖子评论
 * @apiGroup PC端 帖子
 * @apiParam {int} id 帖子id
 * @apiParam {Boolean} collectType 操作类型
 * @apiParam {int} myId 用户id
 * @apiParam {int} userId 发布者id
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
 * @apiSampleRequest http://localhost:3333:/index/post/commentList
 * @apiVersion 1.0.0
 */
// 帖子评论
route.get('/index/post/commentList', (req, res) => {
    constroller6.CommentList(req, res);
});
module.exports = () => {
    return route;
}
