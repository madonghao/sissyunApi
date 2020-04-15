// 添加选中商品

/**
 * input 数据格式 653467,653508,
 * overitemtype 1代表覆盖现有类别和名称 0代表不覆盖现有类别和名称
 * usememberprice 1代表会员价 0代表零售价
 */

module.exports = (query, request) => {
    if (query.data instanceof Array) {
        query.data = query.data.join(',')
    }
    const data = {
        input: query.data,
        overitemtype: query.cover || 1,
        usememberprice: query.type || 1
    }

    return request('POST', `https://shopapi.sissyun.com.cn/api/services/app/tempitem/AddMulti`, data, {cookie: query.cookie, serialize: true})
}