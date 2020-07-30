// const ObjectId = require('mongodb').ObjectID;

(async() => {
    // const mongodber = require('../../utils/mongodber');
    // const db = mongodber.use('kb_plat');
    const MongoClient = require('mongodb').MongoClient;
    let db = await MongoClient.connect('');
    const typeList = [];
    const statusList = [];
    let records = await db.collection('resource_version').find({
    }).toArray();
    for (let record of records) {
        // console.log('1', record.type, '2',record.status);
        if (typeList.findIndex(item => record.type === item) === -1) {
            typeList.push(record.type);
        }
        if (statusList.findIndex(item => record.status === item) === -1) {
            statusList.push(record.status);
        }
    }
    console.log(typeList);
    console.log(statusList);
    console.log('结束');
})();  



