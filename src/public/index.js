const express = require('express');
const constroller = require('./constroller/Search')
const constroller2 = require('./constroller/Upload')


const route = express.Router(); //创建路由路径的链式路由句柄。
//get homePage datas  apidoc -i src/ -o public/apidoc

/**
 * @api {get} /upload/files 文件上传
 * @apiDescription 文件上传
 * @apiGroup 文件上传
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
 * @apiSampleRequest http://localhost:3333:/upload/files
 * @apiVersion 1.0.0
 */
// 文件上传
route.post('/upload/files',constroller2.uploads, (req, res) => {
    constroller2.uploadFiles(req, res);
});

route.get('/index/search',(req,res)=>{
    constroller.searchData(req,res);
})
module.exports = () => {
    return route;
}
