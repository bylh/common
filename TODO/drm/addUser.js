(async () => {
    const { Command } = require('commander');
    const program = new Command();
    program
        .version('0.0.1')
        .option('-u, --user_name <name>', 'Add name')
        .parse(process.argv);
    const MongoClient = require('mongodb').MongoClient;
    const ObjectId = require('mongodb').ObjectId;
    const config = require('./config.local');

    const client = await MongoClient.connect(config.drmMongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
    const db = client.db('kb_drm');
    const name = program.user_name || ''
    const userId = Number(Math.random().toString().slice(-12)) // 生成12位Id
    const findOne = await db.collection('rbac_user').findOne({
        $or: [
            {name: name}, {id: userId}
         ]
    });
    if (findOne != null) {
        console.error('该用户已存在，无法创建')
        process.exit()
    }

    let res = await db.collection('rbac_user').insertOne({
        "id": userId,
        "passport_id": userId,
        "school_id": 384103,
        "name": name,
        "roles": [
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5b29f90c293336b0b4755c25")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5cc1cb4c4f1fdf0528b533a2")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5e40f99b780893c9da63116c")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5c09e0057173495db5825023")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5b2a0a7ec00cda348190b4a8")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5bbf68fb8b2fb7a9651d2b4b")
            },
            {
                "periods": [
                    "初中"
                ],
                "subjects": [
                    "地理"
                ],
                "id": ObjectId("5cc1cb4c4f1fdf0528b533a2")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "地理"
                ],
                "id": ObjectId("5cc1cb4c4f1fdf0528b533a2")
            },
            {
                "periods": [
                    "初中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5cc1cb4c4f1fdf0528b533a2")
            },
            {
                "periods": [
                    "初中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5c09e0057173495db5825023")
            },
            {
                "periods": [
                    "初中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5e40f99b780893c9da63116c")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5e40f99b780893c9da63117c")
            },
            {
                "periods": [
                    "高中"
                ],
                "subjects": [
                    "数学"
                ],
                "id": ObjectId("5b2a03dd19d85f21878c5124")
            }
        ],
        "ctime": new Date(),
        "utime": new Date(),
        "valid": true,
        "system_update": "5d9dd753d8dd8a11ad355709",
        "current_role": {
            "id": ObjectId("5cc1cb4c4f1fdf0528b533a2"),
            "period": "高中",
            "subject": "数学"
        }
    });
    console.log(res)
})()