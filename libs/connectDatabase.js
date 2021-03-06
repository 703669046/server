const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // db 数据库地址
    user: 'root',     // db 数据库用户名
    password: '123456',  //db 密码
    database: 'blogs'   // db 数据库名称
});
function dataBaseControl(sql,callback){
    connection.query(sql,(error,result)=>{
        if(error){
            console.error(error);
            callback(null);
            return;
        }
        callback(result);
    })
}
let ConnecDataBaseAPI = function(sql) {
	return new Promise((resolved, rejected)=>{
		dataBaseControl(sql, (result)=>{
			if (result === null) {
				rejected(null);
			} else {
				resolved(result);
			}
		});
	});
}
// module.exports = connect;
module.exports = ConnecDataBaseAPI;