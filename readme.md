# vue-fast-dev-server

> 10倍缩短您的vue dev server启动时间

![avatar](https://github.com/iptop/vue-fast-dev-server-demo/blob/master/src/assets/demo.gif?raw=true)
## 安装

``` bash
npm install vue-fast-dev-server --save-dev
```
vue.config.js

``` js
const path = require('path')

module.exports = {
  devServer: {
    before: require('vue-fast-dev-server/devServer')
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/router/modules')
      ],
      loader: 'vue-fast-dev-server'
    })
  }
}

```
请把你的路由定义文件迁移至src/router/modules目录下

参考 [iptop/vue-fast-dev-server-demo](https://github.com/iptop/vue-fast-dev-server-demo).

## 原理

> 让浏览器和 dev server 进行联动，没有访问到的路由就直接跳过编译，不管多大的项目都是秒开

## 性能提升


| 项目                         | 加速前     | 加速后|
| --------------------------- | ----------|------|
| dev server 启动时间(带缓存)    | 80S       |   2S |  
| dev server 内存占用           |1600MB     |200MB |  
| HRM响应速度                   | 7.7S      |  0.3S|  
