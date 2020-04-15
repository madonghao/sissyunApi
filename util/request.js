const request = require('request')
const queryString = require('querystring')

const createRequest = (method, url, data, options={}) => {
    return new Promise((resolve, reject) => {
        let headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
            'origin': 'https://shopadmin.sissyun.com.cn',
            'Referer': 'https://shopadmin.sissyun.com.cn',
            'content-type': 'application/json;charset=UTF-8',
        }

        if ('cookie' in options) {
            headers.authorization = `Bearer ${options.cookie}`
        }
        
        if (options.serialize) {
            data = queryString.stringify(data)
            url = `${url}?${data}`
        } else {
            data = JSON.stringify(data)
        }

        const answer = { status: 500, body: {} }
        const settings = {
            method,
            url,
            headers,
            body: data
        }

        console.log(settings)

        request(settings, (err, res, body) => {
            if (err) {
                answer.status = 502
                answer.body = { code: 502, msg: err.stack }
                reject(answer)
            } else {
                answer.status = res.statusCode
                answer.body = JSON.parse(body)
                resolve(answer)
            }
        })
    })
}

module.exports = createRequest