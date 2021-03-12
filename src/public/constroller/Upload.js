
const response = require('../../../libs/result');
const ConnecDataBaseAPI = require('../../../libs/connectDatabase');
const statusObj = require('../../../libs/statusCode')
const multer = require('multer')
let fs = require('fs');
const uploadUrl = require('../../../public/dir')


let address, src
// 使用硬盘存储模式设置存放接收到的文件的路径以及文件名

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let classFile = req.body.type;
        let time = new Date();
        let fileUrl = `${classFile}/${time.getFullYear()}${time.getMonth() + 1}${time.getDate()}`;
        address = `${uploadUrl}/public/upload/${fileUrl}`;
        src = `/public/upload/${fileUrl}`;
        // 接收到文件后输出的保存路径（若不存在则需要创建）  
        fs.exists(address, (exists) => {
            if (exists) {
                console.log("该文件存在！");
            }
            else {
                console.log("该文件不存在！");
                let arr = fileUrl.split('/'), str = uploadUrl + '/public/upload';
                for (let i = 0; i < arr.length; i++) {
                    let s = `/${arr[i]}/`
                    console.log(str += s)
                    fs.mkdir(str, err => { });
                }
            }
        });
        cb(null, address);
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        cb(null, Date.now() + "-" + file.originalname);
    }
});



// 创建 multer 对象
let upload = multer({ storage: storage });

// 文件上传
async function uploadFiles(req, res) {
    // let uploadFolder = address;
    // createFolder(uploadFolder);
    let file = req.file;
    let time = new Date();
    // let fileUrl = `${classFile}\\${time.getFullYear()}${time.getMonth() + 1}${time.getDate()}`;
    file.src = `${src}/${file.filename}`;
    // 接收文件成功后返回数据给前端
    res.send(response.success(file));
}
module.exports = {
    uploadFiles,
    uploads: upload.single('file')
}
