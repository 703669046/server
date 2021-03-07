
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}

const getPostCommentList = async function (id,collback){
    let sql = `select * from blogs_comment where post_id=${id}`;
    let results = await ConnecDataBaseAPI(sql)
    collback(results);
}

async function CommentList(req,res){
    console.log(req.query)
    let id = req.query.id;
    if (id == undefined ) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    };
    let obj=[]
    await getPostCommentList(id,list=>{
        obj = list;
    })
    res.send(response.success(obj));
}

async function addComment(req, res) {
    console.log(req.body)
    let id = req.body.id, context = req.body.context, userId = req.body.userId, myId = req.body.myId;
    if (id == undefined || myId == undefined || !context) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `INSERT INTO blogs_comment (comment_user_id,post_id,comment_content,create_time,update_time) VALUES (${myId},${id},'${context}','${getTimes()}','${getTimes()}')`;
    result = await ConnecDataBaseAPI(sql);
    console.log(sql)
    res.send(response.success());
}



module.exports = {
    addComment,
    CommentList
}
