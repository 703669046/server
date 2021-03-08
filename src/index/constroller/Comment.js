
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}

const getPostCommentList = async function (id,collback){
    let sql = `SELECT a.*,b.nickname,b.figure_url,c.nickname as nikename2,c.figure_url as figure_url2 from blogs_comment a 
    LEFT JOIN blogs_user b on a.comment_user_id = b.id
    LEFT JOIN blogs_user c on a.reply_user_id = c.id WHERE a.post_id =${id}`;
    let results = await ConnecDataBaseAPI(sql)
    let list =[],list2=[];
    if(results.length!=0){
        results.map(item=>{
            if(item.reply_user_id!=null){
                list2.push(item);
            }else{
                item.children =[];
                list.push(item);
            }
        })
    }
    if(list2.length!=0){
        list2.map(item=>{
            list.map(items=>{
                if(item.reply_user_id==items.comment_user_id){
                    items.children.push(item);
                }
            })
        })
    }
    collback(list);
}
// 获取帖子评论列表
async function CommentList(req,res){
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
// 新增评论
async function addComment(req, res) {
    let id = req.body.id, context = req.body.context, replyUserId = req.body.replyUserId, myId = req.body.myId;
    if (id == undefined || myId == undefined || !context) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql;
    if(replyUserId==undefined){
        sql = `INSERT INTO blogs_comment (comment_user_id,post_id,comment_content,create_time,update_time) VALUES (${myId},${id},'${context}','${getTimes()}','${getTimes()}')`;
    }else{
        sql = `INSERT INTO blogs_comment (comment_user_id,reply_user_id,post_id,comment_content,create_time,update_time) VALUES (${myId},${replyUserId},${id},'${context}','${getTimes()}','${getTimes()}')`;
    }
    result = await ConnecDataBaseAPI(sql);
    res.send(response.success());
}

// 获取我评论的
async function myCommentList (req,res){
    let userId = req.query.userId;
    if(userId == undefined){
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `SELECT a.*,b.id,b.title,b.icon_src,b.publisher_icon,b.publisher_name,b.source,b.context,b.category_title,d.path from blogs_comment a 
    LEFT JOIN blogs_post b on a.post_id=b.id
    LEFT JOIN blogs_user c on b.publisher_id=c.id
    LEFT JOIN blogs_auth d on b.category_title=d.auth_name WHERE a.comment_user_id=${userId}`;
    let result = await ConnecDataBaseAPI(sql);
    let list = [];
    if(result.length!=0){
        list = result;
    }
    res.send(response.success(list));
}

// 我收到的评论
async function receivedCommentList (req,res){
    let userId = req.query.userId;
    if(userId == undefined){
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `SELECT a.*, b.title, b.icon_src, b.publisher_icon, b.publisher_name, b.source, b.context, b.category_title, c.id as user_ids, c.nickname, d.path from blogs_comment a 
    LEFT JOIN blogs_post b on a.post_id=b.id
    LEFT JOIN blogs_user c on a.comment_user_id=c.id
    LEFT JOIN blogs_auth d on b.category_title=d.auth_name WHERE a.comment_user_id=${userId}`;
    let result = await ConnecDataBaseAPI(sql);
    let list = [];
    if(result.length!=0){
        list = result;
    }
    res.send(response.success(list));
}

module.exports = {
    addComment,
    CommentList,
    myCommentList,
    receivedCommentList
}
