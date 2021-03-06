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
    let sql = `select * from blogs_post where category=${id} limit ${s},${pageSize}`;
    // connect.query(sql, (err, data) => {
    //     collback(err, data)
    // });a
    let data = await ConnecDataBaseAPI(sql);
    collback(data)
}
//帖子分页查询
async function postPageList(req, res) {
    let id = req.query.id, pageSize = req.query.pageSize, currPage = req.query.currPage;
    if (!id || !pageSize || !currPage) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select * from blogs_post where category=${id}`, size;
    let data = await ConnecDataBaseAPI(sql);
    size = data.length;
    getList(id, pageSize, currPage, size, (list) => {
        let obj = {
            list: [...list],
            total: size,
            pageSize: pageSize,
            currPage: currPage
        }
        res.send(result.success(obj));
    })
    // connect.query(sql, (err, data) => {
    //     size = data.length;
    //     getList(id, pageSize, currPage, size, (err, list) => {
    //         let obj = {
    //             list: [...list],
    //             total: size,
    //             pageSize: pageSize,
    //             currPage: currPage
    //         }
    //         res.send(result.success(obj));
    //     })
    // });

}

// 获取 点赞总数
const getPostCount = async function (id, collback) {
    let sql = `select * from blogs_praise where post_id=${id}`;
    let results = await ConnecDataBaseAPI(sql)
    collback(results.length);
}
const getPostPraiseType = async function (id,myId,collback){
    let sql = `select * from blogs_praise where post_id=${id} and user_parise_id=${myId} limit 1`;
    let result = await ConnecDataBaseAPI(sql);
    if(result.length){
        collback(result[0].praise)
    }else{
        collback(0);
    }
}
const getPostCollectType = async function (id,myId,collback){
    let sql = `select * from blogs_collect where post_id=${id} and user_collect_id=${myId} limit 1`;
    let result = await ConnecDataBaseAPI(sql);
    if(result.length){
        collback(result[0].collect)
    }else{
        collback(0);
    }
}
// 获取 收藏总数
const getPostCollectCount = async function (id, collback) {
    let sql = `select * from blogs_collect where post_id=${id}`;
    let results = await ConnecDataBaseAPI(sql)
    collback(results.length);
}
const formatDate = function (timestamp) {
    let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D
}
// 帖子详情  
async function postInfo(req, res) {
    let id = req.query.id,myId = req.query.myId;
    if (!id) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select * from blogs_post where id=${id}`;
    let results = await ConnecDataBaseAPI(sql);
    let obj = results[0]
    obj.create_time = formatDate(obj.create_time);
    await getPostCount(id, (s) => {
        obj.praises = s
    });
    await getPostCollectCount(id,count=>{
        obj.collects = count;
    })
    await getPostPraiseType(id,myId,item=>{
        obj.praise = item;
    });
    await getPostCollectType(id,myId,item=>{
        obj.collect = item;
    });
    let browse = obj.browse;
    browse+=1
    sql = `UPDATE blogs_post SET browse=${browse},update_time='${getTimes()}' WHERE id=${id}`;
    results = await ConnecDataBaseAPI(sql);
    res.send(result.success(obj));
}
module.exports = {
    postPageList,postInfo
}
