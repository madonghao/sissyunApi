// 登录接口

module.exports = (query, request) => {
    const code = Math.floor(Math.random() * (9000 - 1000) + 1000)
    const data = {
        userNameOrEmailAddress: query.user,
        password: query.password,
        single: false,
        code,
        identifyCode: code,
    }

    return request('POST', `https://shopapi.sissyun.com.cn/api/TokenAuth/Authenticate`, data)
}