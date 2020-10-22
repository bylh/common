(async () => {
    const { Command } = require('commander');
    const program = new Command();
    program
        .version('0.0.1')
        .option('-u, --user_name <name>', 'Add name')
        .parse(process.argv);

    const browser = require('./browser')
    const aes = require('./auth')
    const jwt = require('./jwt')
    const config = require('./config.local')
    const MongoClient = require('mongodb').MongoClient;
    // 连接线上只读库必须设置useUnifiedTopology选项为true（堡垒机转发到线上库）
    const client = await MongoClient.connect(config.drmMongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
    const db = client.db('kb_drm');
    const name = program.user_name || '李欢'
    console.log('name', name);
    let findUser = await db.collection('rbac_user').findOne({
        name
    });
    if (!findUser) {
        console.log('没有找到此用户')
        process.exit()
    }
    const user = {
        "_id": findUser._id,
        "id": findUser.id,
        "name": findUser.name,
        "schoolId": findUser.school_id,
        "schoolName": '爱云校开发',
        "role": "教师",
        "sessionName": "drm-test-session-id",
        "userInfo": "drm-test-user-info",
        "project": "数字化平台（测试环境）",
        "source_platform": "drm",
        "qixin_id": "custom_id",
        "qixin_binded": false
    }
    const jwrUser = jwt.encode(user)
    const aesUser = aes.encript(jwrUser)
    const cookieOpt = browser.setCookie('drm-test-session-id', aesUser, 'yunxiao.com')
    console.log(cookieOpt)
    pbcopy = (data) => {
        var proc = require('child_process').spawn('pbcopy');
        proc.stdin.write(data); proc.stdin.end(); // 复制到剪切板
    }
    pbcopy(cookieOpt)
})()