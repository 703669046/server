const common = require('../../../libs/common');
const result = require('../../../libs/result');
const connect = require('../../../libs/connectDatabase');
const token = require('../../../libs/token')



function userLogin(req, res) {
    let username = req.body.username, password = req.body.password;
    if (!username || !password) {
        res.send(result.fail(406, '请求参数不能为空'));
        return;
    }
    const sql = `select * from blogs_user where username=${username}`;
    connect.query(sql, (err, data) => {
        if (err) {
            res.status(500).send(result.fail(500, '服务器内部错误')).end();
        } else {
            let tokens = token.getToken(data[0].id, 1800);
            var obj = {
                data,
                token: tokens,
                
            }
            res.send(result.success(obj));
        }
    });
}
module.exports = {
    userLogin:userLogin
}
