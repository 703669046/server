let statusArr = [
    { code: 200, title: '请求成功！' },
    { code: 401, title: '认证失败' },
    { code: 406, title: '请求参数不能为空' },
    { code: 406, title: '密码错误' },
    { code: 406, title: '请输入正确的账号' },
    { code: 500, title: '服务器内部错误' },
    { code: 406, title: '账户已存在' },
    { code: 406, title: '验证码错误' },
    { code: 407, title: '服务器繁忙' },
]

module.exports.statusArr = statusArr;