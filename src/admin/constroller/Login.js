const common = require('../../../libs/common');
const result = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const token = require('../../../libs/token')
const statusObj = require('../../../libs/statusCode')
const validate = require('../../../utils/validate')
const check = require('./Captcha')

// 获取菜单列表
let menutList = [];
const getMenutList = async function (callback) {
    let sql = `select * from blogs_auth where menut_type=1`;
    let data = await ConnecDataBaseAPI(sql)
    callback(getTreeList(data))
}
const getCateList = function (list, pid = 0, level = 0) {
    let tree = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].pid == pid) {
            list[i].level = level;
            tree.push(list[i])
            getCateList(list, list[i].id, level + 1);

        }
    }
    return tree
}
const getTreeList = function (list) {
    let temp = [],
        tree = [],
        arr = [];
    list.forEach(item => {
        item.children = [];
        temp[item.id] = item;
    });
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] != undefined) {
            tree.push(temp[i]);
        } else {
            continue;
        }
    }
    for (let s = 0; s < tree.length; s++) {
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] != undefined) {
                if (temp[j].pid == tree[s].id) {
                    tree[s].children.push(temp[j])
                }
            } else {
                continue;
            }
        }
        if (tree[s].pid == 0) {
            arr.push(tree[s])
        }
    }
    return arr;
};

const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}

//用户登录 
async function userLogin(req, res) {
    let username = req.body.username, password = req.body.password, code = req.body.code;
    if (!username || !password) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    if (!check.checkCode(code)) {
        res.send(result.fail(statusObj.statusArr[7].code, statusObj.statusArr[7].title));
        return;
    }
    password = common.md5(password);
    let menutLists = [];
    getMenutList(list => {
        menutLists = list;
    });
    let sql = `select * from blogs_admin where username=${username} limit 1`;

    let data = await ConnecDataBaseAPI(sql);
    let tokens = token.getToken(data[0].id, 1800);

    let obj = {
        userinfo:data[0],
        menutList: menutLists,
        token: tokens
    }
    res.send(result.success(obj));
}

module.exports = {
    userLogin: userLogin,
}
