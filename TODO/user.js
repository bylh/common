const { use } = require('../../utils/mongodber');

(async() => {
    // const mongodber = require('../../utils/mongodber');
    // const db = mongodber.use('kb_plat');
    const MongoClient = require('mongodb').MongoClient;
    // onenote kb_plat
    let db = await MongoClient.connect('');

    const ObjectId = require('mongodb').ObjectID;
    
    const users = [
        {
            id: 28500000003,
            name: '李岩',
        },
        {
            id: 28500000001,
            name: '石伟',
            phone: '28500000001.0',
        },
        {
            id: 28500000002,
            name: '石伟小号',
        },
        {
            id: 28500000004,
            name: '李岩小号',
        },
        {
            id: 28500000005,
            name: '王迪',
        },
        {
            id: 28500000006,
            name: '王迪小号',
        },
        {
            id: 28500000007,
            name: '房姗',
        },
        {
            id: 28500000008,
            name: '房姗小号',
        },
        {
            id: 28500000009,
            name: '翠花',
        },
        {
            id: 285000000010,
            name: '翠花小号',
        },
        {
            id: 285000000011,
            name: '阿龙',
        },
        {
            id: 285000000012,
            name: '新鸽',
        },
        {
            id: 18500000001,
            name: '沈孤云',
        },
        {
            id: 18500000002,
            name: '萧别离',
        },
        {
            id: 18500000003,
            name: '龙天绝',
        },
        {
            id: 18500000004,
            name: '林逸飞',
        },
        {
            id: 18500000005,
            name: '宣墨',
        },
        {
            id: 18500000006,
            name: '耶和华',
        },
        {
            id: 285000000013,
            name: '小利',
        },
        {
            id: 285000000015,
            name: '李欢',
            phone: '285000000015.0',
        },
        {
            id: 285000000018,
            name: '韩明明',
            phone: '285000000018.0',
        },
        {
            id: 285000000017,
            name: '曾晨光',
            phone: '285000000017.0',
        },
        {
            id: 285000000019,
            name: '李春鹏',
        },
        {
            id: 285000000020,
            name: '杨梦霞',
        },
        {
            id: 285000000030,
            name: '陈彩艳',
            phone: '285000000030.0',
        },
        {
            id: 285200000030,
            name: '孙胜龙',
            phone: '285200000030.0',
        },
        {
            id: 285100000030,
            name: '周宗文',
            phone: '285100000030.0',
        },
        {
            id: 2852300000030,
            name: '赵铁林',
            phone: '2852300000030.0',
        },
        {
            id: 285000000018111,
            name: '贺亮亮',
            phone: '285000000018111.0',
        },
        {
            id: 2850000000158,
            name: '李欢111',
            phone: '288000000015.0',
        },
    ];
    // let users = await db.collection('rbac_user').find({
    //     school_id: 11732
    // }).toArray();
    const roles = [
        {
            periods: ['小学'],
            subjects: ['数学'],
            id: ObjectId('5c75169daea41ba4858d4364'),
        },
        {
            periods: ['小学'],
            subjects: ['语文'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['语文'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['数学'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['英语'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['语文'],
            id: ObjectId('5c75e9a3aea41ba4858d4385'),
        },
        {
            periods: ['初中'],
            subjects: ['数学'],
            id: ObjectId('5c75e9a3aea41ba4858d4385'),
        },
        {
            periods: ['初中'],
            subjects: ['英语'],
            id: ObjectId('5c75e9a3aea41ba4858d4385'),
        },
        {
            periods: ['高中'],
            subjects: ['语文'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['数学'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['语文'],
            id: ObjectId('5c75e9a3aea41ba4858d4385'),
        },
        {
            periods: ['初中'],
            subjects: ['历史'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['政治'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['地理'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['化学'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['生物'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['政治'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['地理'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['历史'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['英语'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['物理'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['化学'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['生物'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['小学'],
            subjects: ['数学'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['小学'],
            subjects: ['英语'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['高中'],
            subjects: ['历史'],
            id: ObjectId('5c75e9a3aea41ba4858d4385'),
        },
        {
            periods: ['初中'],
            subjects: ['政治'],
            id: ObjectId('5c75e9a3aea41ba4858d4385'),
        },
        {
            periods: ['初中'],
            subjects: ['物理'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['小学'],
            subjects: ['科学'],
            id: ObjectId('5c7524c3aea41ba4858d4375'),
        },
        {
            periods: ['初中'],
            subjects: ['语文'],
            id: ObjectId('5c9c2d250cfce534b46618bc'),
        },
    ];
    const current_role = {
        id : ObjectId('5c7524c3aea41ba4858d4375'),
        period : '高中',
        subject : '数学'
    };
    // let inertUsers = users.map(item => ({
    //         ...item,
    //         // _id: ObjectId(item._id),
    //         // roles,
    //         // school_id: 11732,
    //         // school_id: 384106,
    //         current_role
    //     }));
    try {
        console.time('save');
        // await db.collection('rbac_user').insertMany(inertUsers);

        for (let user of users) {
            console.log(user.id);
            let data = await db.collection('rbac_user').findOne({id: user.id});
            // console.log('data', data);
            data.current_role = current_role;
            data.roles = roles;
            data.school_id = 384103;
            data._id = ObjectId(data._id);/paper/download
            await db.collection('rbac_user').save(data);
        }
        console.timeEnd('save');

    } catch (e) {
        console.error('错误', e);
    }
    console.log('结束');
})();  



