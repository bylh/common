import * as wemap from '@tencent/wemap-sdk'
import '@tencent/wemap-sdk/api.css'

window.iD.initWemap({
    
})
    .then(function (ctx) {
        // 初始化成功
        window.context = ctx
    })
