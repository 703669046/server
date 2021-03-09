
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')

let fs = require('fs');
// 创建文件夹
let createFolder = function(folder){
    try{
        // 测试 path 指定的文件或目录的用户权限,用来检测文件是否存在
        fs.accessSync(folder); 
    }catch(e){
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }  
};

let uploadFolder = '../../../public/upload/';
createFolder(uploadFolder);
const getTimes = function () {
    let s = new Date().getTime().toString();
    s = s.substr(0, s.length - 3)
    return s;
}
// 文件上传
async function uploadFiles(req, res) {

    res.send(response.success(list[0]));
}
module.exports = {
    uploadFiles
}
