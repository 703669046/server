
const result = require('../../../libs/result');
const validate = require('../../../utils/validate')

const svgCaptcha = require('svg-captcha');
const fs = require('fs');
const path = require('path')
let getUnicode;
//用户登录
function captcha(req, res) {
    let codeConfig = {
        size: 4,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        height: 44
    }
    let captcha = svgCaptcha.create(codeConfig),
        timeObj = validate.dealWithTime(new Date()),
        fileSrc = path.join(__dirname, '../../');
    addressFile = `${fileSrc}asstes/captcha/${timeObj.time}`;
    // fs.exists(addressFile, (exists) => {
    //     if (exists) {
    //         console.log(addressFile, '文件存在');
    //         fs.writeFileSync(`${addressFile}/${timeObj.timestamp}.jpg`, captcha.data);
    //     } else {
    //         console.log(addressFile, '文件不存在');
    //         fs.mkdir(addressFile, (err) => {
    //             if (err)
    //                 throw err;
    //             fs.writeFileSync(`${addressFile}/${timeObj.timestamp}.jpg`, captcha.data);
    //         });
    //     }
    // });

    let str = captcha.text.toUpperCase(), unicode = [];
    for (let i = 0; i < str.length; i++) {
        unicode[i] = str[i].charCodeAt();;
    }

    let obj = {
        src: captcha.data,
        unicode: Number(`${unicode[0]}${unicode[1]}${unicode[2]}${unicode[3]}`)
    }
    getUnicode = obj.unicode;
    res.send(result.success(obj));
}
function checkCode(code) {
    let str = code.toUpperCase(), unicode = [];
    for (let i = 0; i < str.length; i++) {
        unicode[i] = str[i].charCodeAt();;
    }
    let val = Number(`${unicode[0]}${unicode[1]}${unicode[2]}${unicode[3]}`)
    if (getUnicode === val){
        return true;
    }else{
        return false;
    }
}
module.exports = {
    captcha: captcha,
    getUnicode: getUnicode,
    checkCode:checkCode
}
