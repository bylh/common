const Koa = require('koa')
const Router = require('koa-router');
const router = new Router();
const app = new Koa()
// import {count, add} from './a.ejs'
// 启动路由
app.use(router.routes()).use(router.allowedMethods())

// // #1
// app.use(async (ctx, next)=>{
//     console.log(1)
//     await next();
//     console.log(11)
// });
// // #2
// app.use(async (ctx, next) => {
//     console.log(2)
//     await next();
//     console.log(22)
// })

// app.use(async (ctx, next) => {
//     console.log(3)
//     await next();
//     console.log(33)
// })
router.get('/list', async ctx => {
    ctx.body = 'Hello Router';
})

app.listen(3000)