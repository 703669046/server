const common = require('../../../libs/common');
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}

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

module.exports = {
    setCollect
}
