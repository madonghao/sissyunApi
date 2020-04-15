// 在线导入缓存商品

module.exports = (query, request) => {
    const data = {
        maxResultCount: query.max || 10,
        skipCount: query.skip || 0,
        filter: query.search || ''
    }

    return request('GET', `https://shopapi.sissyun.com.cn/api/services/app/tempitem/GetAll`, data, {cookie: query.cookie, serialize: true})
}