const common = require('../../../libs/common');
const result = require('../../../libs/result');
const connect = require('../../../libs/connectDatabase');
const token = require('../../../libs/token')
const statusObj = require('../../../libs/statusCode')
const validate = require('../../../utils/validate')

// 获取菜单列表
function getMenutList() {
    let title = req.query.title;
    let sql = `select * from blogs_auth where menut_type=0`
    connect.query(sql, (err, data) => {
        if (!err) {
            console.log(data);
        }
    })
}
module.exports = {
    getMenutList: getMenutList
}
