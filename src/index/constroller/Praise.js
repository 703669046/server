const common = require('../../../libs/common');
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}

async function setPraise(req, res) {
    let id = req.body.id, praiseType = req.body.praiseType, userId = req.body.userId, myId = req.body.myId;
    if (id == undefined || userId == undefined || myId == undefined) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select * from blogs_praise where post_id=${id} and user_parise_id=${myId} limit 1`;
    let result = await ConnecDataBaseAPI(sql);
    let obj = {};
    if (praiseType) {
        obj.praise = 1;
    } else {
        obj.praise = 0;
    }
    if (result.length != 0) {
        sql = `UPDATE blogs_praise SET praise=${obj.praise},update_time='${getTimes()}' WHERE user_parise_id=${myId} AND post_id=${id} AND user_ids=${userId}`;
        result = await ConnecDataBaseAPI(sql);
    } else {
        sql = `INSERT INTO blogs_praise (praise,post_id,user_parise_id,user_ids,create_time,update_time) 
        VALUES (${obj.praise},${id},${myId},${userId},'${getTimes()}','${getTimes()}')`;
        result = await ConnecDataBaseAPI(sql);
        console.log(false)
    }
    res.send(response.success());
}
// 我的点赞
async function myPraiseList(req,res){
    let userId = req.query.userId;
    if(userId == undefined){
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `SELECT a.*,b.id,b.title,b.icon_src,b.publisher_icon,b.publisher_name,b.source,b.context,b.category_title,c.path from blogs_praise a 
    LEFT JOIN blogs_post b on a.post_id=b.id
    LEFT JOIN blogs_auth c on b.category_title=c.auth_name WHERE a.user_parise_id=${userId} AND a.praise=1 ORDER BY a.create_time DESC`;
    let result = await ConnecDataBaseAPI(sql);
    let list = [];
    if(result.length!=0){
        list = result;
    }
    res.send(response.success(list));
}
module.exports = {
    setPraise,
    myPraiseList
}
