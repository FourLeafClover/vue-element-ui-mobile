
  vue-element-ui-mobile

  命令

  `
    npm install

    npm run start 

    npm run build

  `

  基于 vue-cli@3.0

  /src/utils下提供了 http 请求,localstorage 存储,cookie 操作

  实现了简单的登录验证跳转
  
  通过配置路由meta index实现页面过渡动画。相同的直接跳转，index高的就左切换

  动态设置页面缓存

  /src/router/router.js 配置路由。

  `
    meta: {
        needAuth: false,
        index: 0, // 用于页面过渡动画,index从小跳转到大的页面,左滑动,从大到小右滑动,同级没有动画效果
        cache: true // 页面是否缓存,不设置默认不缓存
    }

  `


  
  
 