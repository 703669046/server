module.exports ={
    success:(data=[],message='请求成功',code=200,success=true)=>{
        return {data,code,success,message}
    },
    fail:(code=401,message='认证失败',success=false)=>{
        return {code,success,message}
    }
}