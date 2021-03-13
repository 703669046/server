
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const token = require('../../../libs/token')
const statusObj = require('../../../libs/statusCode')

//用户列表
async function getAdminList(req, res) {
    let sql = `select * from blogs_admin`;
    let data = await ConnecDataBaseAPI(sql)
    let list =[];
    list = data;
    res.send(response.success(list));
}

module.exports = {
    getAdminList
}
