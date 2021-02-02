const jwt = require('jsonwebtoken')

module.exports ={
    //生成token
    getToken:(id,time)=>{
        // 1、自定义存储值，2、自定义加密token，3、过期时间
        return jwt.sign({id: id}, 'sfagrbgf@4332&#*', { expiresIn: time});
    },
    //验证token
    checkToken:(token)=>{
        try{
            let obj = jwt.verify(token, 'sfagrbgf@4332&#*');
            if(obj.id){
                return true;
            }else{
                return false;
            }
        }catch(err){
            return false;
        }
    },
    //获取用户id
    getUserId:(token)=>{
        try{
            let obj = jwt.verify(token, 'sfagrbgf@4332&#*');
            if(obj.id){
                return obj.id;
            }else{
                return undefined;
            }
        }catch(err){
            return false;
        }
    },
    //销毁token
    destroyToken:(token)=>{
        try{
            return jwt.decode(token,'sfagrbgf@4332&#*')
        }catch(err){
            return false;
        }
    }
}