
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}
// 收藏
async function setCollect(req, res) {
    let id = req.body.id, collectType = req.body.collectType, userId = req.body.userId, myId = req.body.myId;
    if (id == undefined || userId == undefined || myId == undefined) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select * from blogs_collect where post_id=${id} and user_collect_id=${myId} limit 1`;
    let result = await ConnecDataBaseAPI(sql);
    let obj = {};
    if (collectType) {
        obj.collect = 1;
    } else {
        obj.collect = 0;
    }
    if (result.length != 0) {
        sql = `UPDATE blogs_collect SET collect=${obj.collect},update_time='${getTimes()}' WHERE user_collect_id=${myId} AND post_id=${id} AND user_ids=${userId}`;
        result = await ConnecDataBaseAPI(sql);
    } else {
        sql = `INSERT INTO blogs_collect (collect,post_id,user_collect_id,user_ids,create_time,update_time) 
        VALUES (${obj.collect},${id},${myId},${userId},'${getTimes()}','${getTimes()}')`;
        result = await ConnecDataBaseAPI(sql);
        console.log(false)
    }
    res.send(response.success());
}

// 我的收藏
async function myCollectList (req,res){
    let userId = req.query.userId;
    if(userId == undefined){
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `SELECT a.*,b.id,b.title,b.icon_src,b.publisher_icon,b.publisher_name,b.source,b.context,b.category_title,c.path from blogs_collect a 
    LEFT JOIN blogs_post b on a.post_id=b.id
    LEFT JOIN blogs_auth c on b.category_title=c.auth_name WHERE a.user_collect_id=${userId} and a.collect=1 ORDER BY a.create_time DESC`;
    let result = await ConnecDataBaseAPI(sql);
    let list = [];
    if(result.length!=0){
        list = result;
    }
    res.send(response.success(list));
}
module.exports = {
    setCollect,
    myCollectList
}
