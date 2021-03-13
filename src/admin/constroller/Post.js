const common = require('../../../libs/common');
const result = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')



const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}
const getList = async function (id, pageSize, currPage, total, collback) {
    let s = (currPage - 1) * pageSize
    let sql = `select * from blogs_post limit ${s},${pageSize}`;
    // connect.query(sql, (err, data) => {
    //     collback(err, data)
    // });a
    let data = await ConnecDataBaseAPI(sql);
    collback(data)
}
//帖子分页查询
async function postPageList(req, res) {
    let pageSize = req.query.pageSize, currPage = req.query.currPage;
    if (!pageSize || !currPage) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select * from blogs_post`, size;
    let data = await ConnecDataBaseAPI(sql);
    size = data.length;
    getList(pageSize, pageSize, currPage, size, (list) => {
        let obj = {
            list: [...list],
            total: size,
            pageSize: pageSize,
            currPage: currPage
        }
        res.send(result.success(obj));
    })
}

//帖子详情
async function getPostInfo(req, res) {
    let id = req.query.id;
    if (!id) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select * from blogs_post where id=${id}`;
    let data = await ConnecDataBaseAPI(sql);
    let obj = {};
    obj=data[0]
    res.send(result.success(obj));
}

//帖子审批
async function postApproval(req, res) {
    let id = req.body.id,type=req.body.type;
    if (!id||!type) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `UPDATE blogs_post SET type=${type},update_time='${getTimes()}' WHERE id=${id}`;
    let data = await ConnecDataBaseAPI(sql);
    let obj = {};
    res.send(result.success());
}

module.exports = {
    postPageList, getPostInfo,postApproval
}
