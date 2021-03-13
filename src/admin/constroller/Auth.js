const common = require('../../../libs/common');
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const token = require('../../../libs/token')
const statusObj = require('../../../libs/statusCode')
const validate = require('../../../utils/validate')
const check = require('./Captcha')

// 获取菜单列表
let menutList = [];
const getMenutList = async function (id,callback) {
    let sql = `select * from blogs_auth where menut_type=${id}`;
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
async function getMenutLists(req, res) {
    let id = req.query.type;
    let menutLists = [];
    await getMenutList(id,list => {
        menutLists = list;
    });
    res.send(response.success(menutLists));

}

module.exports = {
    getMenutLists
}
