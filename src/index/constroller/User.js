
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}
// 收藏
async function setUserInfo(req, res) {
    console.log(req.body)
    let id = req.body.id, data = req.body;
    data.label = data.label.toString()
    if (id == undefined) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `UPDATE blogs_user SET blogs_user.nickname='${data.nickname}',blogs_user.figure_url='${data.figure_url}',blogs_user.email='${data.email}',blogs_user.label='${data.label}',blogs_user.explains='${data.explains}',blogs_user.github='${data.github}',blogs_user.company='${data.company}',blogs_user.position='${data.position}',blogs_user.location='${data.location}',blogs_user.age='${data.age}',blogs_user.qq='${data.qq}',update_time='${getTimes()}' WHERE id=${id}`;
    let result = await ConnecDataBaseAPI(sql);
    let obj = {};
    console.log(result,protocol41)
    res.send(response.success());
}

// 我的信息
async function userInfo(req, res) {
    let userId = req.query.id;
    if (userId == undefined) {
        res.send(response.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    let sql = `select blogs_user.id,blogs_user.username,blogs_user.nickname,blogs_user.phone,blogs_user.figure_url,blogs_user.email,blogs_user.label,blogs_user.explains,blogs_user.github,blogs_user.company,blogs_user.position,blogs_user.location,blogs_user.age,blogs_user.qq from blogs_user where id=${userId}`;
    let result = await ConnecDataBaseAPI(sql);
    let list = [];
    if (result.length != 0) {
        list = result;
    }
    res.send(response.success(list[0]));
}
module.exports = {
    userInfo,
    setUserInfo,
}
