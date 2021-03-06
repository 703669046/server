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
    let sql = `select * from blogs_auth where menut_type=0`;
    // connect.query(sql, (err, data) => {
    //     if (!err) {
    //         menutList = getTreeList(data);
    //         callback(getTreeList(data))
    //     }
    // })
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
    let sql = `select * from blogs_user where username=${username} limit 1`;

    // connect.query(sql, (err, data) => {
    //     if (err) {
    //         res.status(500).send(result.fail(statusObj.statusArr[5].code, statusObj.statusArr[5].title)).end();
    //     } else {
    //         try {
    //             if (data[0].password != password) {
    //                 res.send(result.fail(statusObj.statusArr[3].code, statusObj.statusArr[3].title));
    //                 return;
    //             };
    // let tokens = token.getToken(data[0].id, 1800);

    // let obj = {
    //     id: data[0].id,
    //     username: data[0].username,
    //     nickname: data[0].nickname,
    //     figure_url: data[0].figure_url,
    //     email: data[0].email,
    //     menutList: menutLists,
    //     token: tokens
    // }
    // res.send(result.success(obj));
    //         } catch (err) {
    //             res.send(result.fail(statusObj.statusArr[8].code, statusObj.statusArr[8].title));
    //         }
    //     }
    // });
    let data = await ConnecDataBaseAPI(sql);
    let tokens = token.getToken(data[0].id, 1800);

    let obj = {
        id: data[0].id,
        username: data[0].username,
        nickname: data[0].nickname,
        figure_url: data[0].figure_url,
        email: data[0].email,
        menutList: menutLists,
        token: tokens
    }
    res.send(result.success(obj));
}

const addUsers = async function (obj, callback) {
    let sql = `INSERT INTO blogs_user ( username, nickname,phone,password,email,create_time,update_time,cip,cid,cname ) 
    VALUES 
    ('${obj.username}','${obj.nickname}','${obj.phone}','${obj.password}','${obj.email}','${getTimes()}','${getTimes()}','${obj.cip}','${obj.cid}','${obj.cname}')`;
    // connect.query(sql, (err, data) => {
        // if (data.insertId) {
        //     callback(true);
        // } else {
        //     callback(false);
        // }

    // });
    let data = await ConnecDataBaseAPI(sql);
    if (data.insertId) {
        callback(true);
    } else {
        callback(false);
    }
}

// 用户注册
async function userRegister(req, res) {
    let username = req.body.username, password = req.body.password, code = req.body.code, email = req.body.email, nickname = req.body.nickname, city = req.body.city;
    if (!username || !password || !password || !email || !nickname) {
        res.send(result.fail(statusObj.statusArr[2].code, statusObj.statusArr[2].title));
        return;
    }
    if (!check.checkCode(code)) {
        res.send(result.fail(statusObj.statusArr[7].code, statusObj.statusArr[7].title));
        return;
    }
    password = common.md5(password);
    let sql = `select * from blogs_user where username=${username}`;
    
    let data = await ConnecDataBaseAPI(sql);
    if (data.length) {
        res.send(result.fail(statusObj.statusArr[6].code, statusObj.statusArr[6].title));
        return;
    }
    let obj = {
        username: username,
        password: password,
        nickname: nickname,
        email: email,
        phone: username,
        cip: city.cip,
        cid: city.cid,
        cname: city.cname,
        dd: true,
    };
    addUsers(obj, (s) => {
        if (s) {
            res.send(result.success({}, '注册成功'));
        } else {
            res.send(result.fail(statusObj.statusArr[8].code, statusObj.statusArr[8].title));
        }
    });
    // connect.query(sql, (err, data) => {
    //     if (err) {
    //         res.status(500).send(result.fail(statusObj.statusArr[5].code, statusObj.statusArr[5].title)).end();
    //     } else {
    //         try {
                // if (data.length) {
                //     res.send(result.fail(statusObj.statusArr[6].code, statusObj.statusArr[6].title));
                //     return;
                // }
                // let obj = {
                //     username: username,
                //     password: password,
                //     nickname: nickname,
                //     email: email,
                //     phone: username,
                //     cip: city.cip,
                //     cid: city.cid,
                //     cname: city.cname,
                //     dd: true,
                // };
                // addUsers(obj, (s) => {
                //     if (s) {
                //         res.send(result.success({}, '注册成功'));
                //     } else {
                //         res.send(result.fail(statusObj.statusArr[8].code, statusObj.statusArr[8].title));
                //     }
                // });
    //         } catch (err) {
    //             res.send(result.fail(statusObj.statusArr[8].code, statusObj.statusArr[8].title));
    //         }
    //     }
    // });
}
module.exports = {
    userLogin: userLogin,
    userRegister: userRegister
}
