// const ObjectId = require('mongodb').ObjectID;
(async() => {
    // const mongodber = require('../../utils/mongodber');
    // const db = mongodber.use('kb_plat');
    const MongoClient = require('mongodb').MongoClient;
    // 连接线上只读库必须设置useUnifiedTopology选项为true（堡垒机转发到线上库）
    const client = await MongoClient.connect('mongodb://user:pwd@address:port/dbName', {useUnifiedTopology: true, useNewUrlParser: true});
    const db = client.db('kb');
    let records = await db.collection('english_word').find({
    }).limit(10).toArray();
    console.log('结束', records);
})();



