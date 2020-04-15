// 商品管理

/**
 * maxResultCount：最大结果数量
 * skipCount：跳过数量
 * filter：搜索内容
 * Status：见下面注解
 * SmallCategory：小分类编号
 * BigCategory：大分类编号
 * brandno：品牌
 */

/**
 * Status 取值
 * 0：未上架
 * 1：已上架
 * 2：未知
 * 3：已售罄
 */

module.exports = (query, request) => {
    const data = {
        maxResultCount: query.max || 10,
        skipCount: query.skip || 0,
        filter: query.search || '',
        Status: query.type || 1,
        SmallCategory: query.subclass || '',
        BigCategory: query.bigclass || '',
        brandno: ''
    }

    return request('GET', `https://shopapi.sissyun.com.cn/api/services/app/t_item_info/GetAll`, data, {cookie: query.cookie, serialize: true})
}