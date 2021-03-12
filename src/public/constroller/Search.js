
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')
async function searchData(req,res){
    let title = req.query.title;
    let list =[];
    // if(title==')
    if(title.length==0){
        res.send(response.success(list));
        return;
    }
    let sql =`SELECT distinct a.id,a.title,a.category_title,b.praise,c.collect,d.path FROM blogs_post a
    LEFT JOIN blogs_praise b ON a.id=b.post_id
    LEFT JOIN blogs_collect c ON b.post_id=c.post_id
    LEFT JOIN blogs_auth d ON a.category_title=d.auth_name
    WHERE a.type=3 AND CONCAT(a.title,a.context) LIKE '%${title}%' ORDER BY a.browse DESC`
    let result = await ConnecDataBaseAPI(sql);
   
    if(result.length!=0){
        list = result;
    }
    res.send(response.success(list));
}
module.exports = {
    searchData
}
