const fs = require('fs')
const qrcode = require('qrcode')
const axios = require('axios')
const FormData = require('form-data')

// 生成视频二维码
async function generateVideoQrcode(videoId) {
    videoId = String(videoId) // 必须是字符串类型
    let prefixText = 'http://testm-kbp.yunxiao.com' // 视频id需要拼接的域名
    let servBaseUrl = 'http://testkb.yunxiao.com' // 上传服务url
    if (process.env.NODE_ENV === 'production') { //  根据NODE_ENV判断刷测试还是线上
        prefixText = 'http://m-kbp.yunxiao.com'
        servBaseUrl = 'http://kb.yunxiao.com'
    }
    qrcodeText = prefixText + `/video?videoId=${videoId}`
    const filePath = new Date().getTime() + '.png'
    try {
        await qrcode.toFile(filePath, videoId)
        const stream = fs.createReadStream(filePath)
        const form = new FormData()
        form.append('file', stream)
        const formHeaders = form.getHeaders()
        // UTILBOX上传服务，上传生成的二维码至百度云，并返回链接
        const data = await axios.post(`${servBaseUrl}/utilbox_api/v2/upload/files?appid=kb`, form, {
            headers: {
                ...formHeaders,
            },
        })
        return data.data.data.url
    } catch (e) {
        console.log(`生成视频（${videoId}）二维码失败:`, e)
        return ''
    } finally {
        fs.unlink(filePath, () => {})
    }
}

// 主函数
(async () => {
    let videoId = 2138767359
    // generateVideoQrcode函数不抛出错误，生成失败直接返回空
    const url = await generateVideoQrcode(videoId)
    console.log('url', url)
})()