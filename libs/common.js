"use strict"
const crypto = require('crypto');
let MD5_SUFFXIE="HUNCSCDMM@#@$^%&^*%#$GFbggnCDSccxczvdsdhagbnfghvZfsdv";
module.exports = {
   
    md5: (str) => {
        let md5Obj = crypto.createHash('md5');
        md5Obj.update(str,MD5_SUFFXIE);
        return md5Obj.digest('hex');
    }
}
