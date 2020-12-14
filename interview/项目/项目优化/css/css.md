# 浏览器css下载及解析

+ 下载顺序：<https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css?hl=zh-cn>

+ [网页性能优化](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=zh-cn)

+ chunk-vendors主要是第三方包的打包（node_modules）过大
  1、使用compression-webpack-plugin开启gzip压缩(nginx也要同步开启)
  怎么判断是否配置成功：content-encording: gizp
  2、loadsh、rxjs按需引入
  3、kbui打包时应该将vue和element-ui剔除掉
  解决方案： 路由懒加载， import的方式异步引入
            lodash按需引入

+ 前端优化之DNS预解析

+ 图片懒加载（IntersectionObserver api）

+ CDN 引入，然后在webpack中externals中配置