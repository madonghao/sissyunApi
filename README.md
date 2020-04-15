# 思迅微商店 API

思迅微商店 Node.js API service

## 灵感来自

[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

> 代码及文档都是参考此项目的思路来编写的，根据自己的需求，稍加改动了一下

## 功能列表

1. 登录
2. 商品管理
3. 获取缓存数据
4. 获取商城详情

## 安装

```shell
$ git clone git@github.com:madonghao/sissyunApi.git

$ yarn
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000, 若不想使用 3000 端口 , 可使用以下命令 : Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :

```shell
$ set PORT=4000 && node app.js
```

服务器启动默认 host 为localhost,如果需要更改, 可使用以下命令 : Mac/Linux
```shell
$ HOST=127.0.0.1 node app.js
```
windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :

```shell
$ set HOST=127.0.0.1 && node app.js
```

## 接口文档

### 调用前须知
!> 本项目GET/POST均支持 请按实际的需求来合理选择使用

!> 接口已做缓存处理，缓存时间为2分钟，如果遇到不需要缓存结果的接口,可在请求 url 后面加一个时间戳参数使 url 不同 , 例子 :
`/temp/data?max=100&skip=10&search=&timestamp=1586923275917`

!> 除登录接口外，所有接口都需要调用登录接口后调用

!> 如果是跨域请求 , 请在所有请求带上 `xhrFields: { withCredentials: true }` (axios 为 `withCredentials: true`)否则
可能会因为没带上 cookie 导致 301, 具体例子可看 `public/test.html`, 访问`http://localhost:3000/test.html`(默认端口的话) 例子使用 jQuery 和 axios

!> 本项目不定期更新，如有任何问题请提issues，会抽时间处理，同时欢迎PR和Star

!> 本项目仅供学习使用,请尊重版权，请勿利用此项目从事商业行为

### 登录
---

参数 | 是否必须 | 描述  
:-:|:-:|:-:
`user` | 是 | 用户名 |
`password` | 是 | 密码 |

**接口地址：** `/login`

**调用例子：** `/login?user=xxx&password=yyy`

### 商品管理
---

参数 | 是否必须 | 描述 | 默认值
:-:|:-:|:-:|:-:
`max` | 否 | 获取几条数据 | 10
`skip` | 否 | 从第几条数据开始获取 | 0
`search` | 否 | 筛选关键字 | 空
`type` | 否 | 类型：0未上架、1已上架、2未知、3已售罄 | 1
`subclass` | 否 | 小类编号 | 空
`bigclass` | 否 | 大类编号 | 空
`brandno` | 否 | 品牌保留参数，无需传值 | 空

**接口地址：** `/goods/info`

**调用例子：** `/goods/info?max=100&type=1&skip=10`

### 获取缓存数据
---

> 此接口返回的是在线导入后的缓存商品信息数据

参数 | 是否必须 | 描述 | 默认值
:-:|:-:|:-:|:-:
`max` | 否 | 获取几条数据 | 10
`skip` | 否 | 从第几条数据开始获取 | 0
`search` | 否 | 筛选关键字 | 空

**接口地址：** `/temp/data`

**调用例子：** `/temp/data?max=100&skip=10&search=`

### 获取商城详情
---

> 本接口无参数,可获取加密狗号，logo等一些信息

**接口地址：** `/shop/info`

**调用例子：** `/shop/info`

## 关于此文档

此文档由 [docsify](https://github.com/QingWei-Li/docsify/) 生成 docsify 是一个动
态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html
文件，所有转换工作都是在运行时进行。

## License

[The MIT License (MIT)](https://github.com/madonghao/sissyunApi/blob/master/LICENSE)