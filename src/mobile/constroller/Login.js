const common = require('../../../libs/common');
const result = require('../../../libs/result');
const connect = require('../../../libs/connectDatabase');
const token = require('../../../libs/token')


//用户登录
function userLogin(req, res) {
    let username = req.body.username, password = req.body.password;
    if (!username || !password) {
        res.send(result.fail(406, '请求参数不能为空'));
        return;
    }
    password = common.md5(password);
    let sql = `select * from blogs_user where username=${username}`;
    connect.query(sql, (err, data) => {
        if (err) {
            res.status(500).send(result.fail(500, '服务器内部错误')).end();
        } else {
            try {
                if (data[0].password != password) {
                    res.send(result.fail(406, '密码错误'));
                    return;
                }
                let tokens = token.getToken(data[0].id, 1800);
                var obj = {
                    id: data[0].id,
                    username: data[0].username,
                    nickname: data[0].nickname,
                    figure_url: data[0].figure_url,
                    email: data[0].email,
                    token: tokens
                }
                res.send(result.success(obj));
            } catch (err) {
                res.send(result.fail(406, '请输入正确的账号'));
            }
        }
    });
}

// 用户注册
function userRegister(req, res) {
    let username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        nickname = req.body.nickname
    if (!username || !password ) {
        res.send(result.fail(406, '请求参数不能为空'));
        return;
    }
    password = common.md5(password);
    let sql = `select * from blogs_user where username=${username}`;
    connect.query(sql, (err, data) => {
        if (err) {
            res.status(500).send(result.fail(500, '服务器内部错误')).end();
        } else {
            try {
                if (data[0].password != password) {
                    res.send(result.fail(406, '密码错误'));
                    return;
                }
                let tokens = token.getToken(data[0].id, 1800);
                var obj = {
                    id: data[0].id,
                    username: data[0].username,
                    nickname: data[0].nickname,
                    figure_url: data[0].figure_url,
                    email: data[0].email,
                    token: tokens
                }
                res.send(result.success(obj));
            } catch (err) {
                res.send(result.fail(406, '请输入正确的账号'));
            }
        }
    });
}
module.exports = {
    userLogin: userLogin,
    userRegister: userRegister
}
