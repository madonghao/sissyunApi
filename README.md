# sissyunApi

思迅微商店 Node.js API service

## 灵感来自

[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

> 代码及文档都是参考此项目的思路来编写的，根据自己的需求，稍加改动了一下

## 功能列表

1. 登录
2. 商品管理
3. 从线下获取单个商品
4. 获取缓存数据
5. 添加选中商品
6. 获取商城详情

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

## 使用文档

[文档地址](https://madonghao.github.io/sissyunApi)

## License

[The MIT License (MIT)](https://github.com/madonghao/sissyunApi/blob/master/LICENSE)