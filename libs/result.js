module.exports ={
    success:(data=[],code=200,state=true,message='请求成功')=>{
        return {data,code,state,message}
    },
    fail:(code=401,message='认证是失败',state=false)=>{
        return {code,state,message}
    }
}