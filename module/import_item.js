// 从线下获取单个商品

module.exports = (query, request) => {
    const data = {
        itemno: query.itemno
    }

    return request('POST', `https://shopapi.sissyun.com.cn/api/services/app/tempitem/additem`, data, {cookie: query.cookie, serialize: true})
}