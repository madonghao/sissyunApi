// 微商店详情

module.exports = (query, request) => {
    return request('GET', `https://shopapi.sissyun.com.cn/api/services/app/ShopinfoService/GetShopInfoDto`, {}, {cookie: query.cookie, serialize: true})
}