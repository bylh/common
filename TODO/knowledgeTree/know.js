
// const ObjectId = require('mongodb').ObjectID;
(async() => {
    const axios = require('axios');
    // const _getChapters = (tree) => {
    //     const chapters = [];
    //     const recursiveNodes = (item) => {
    //         if (Array.isArray(item.nodes)) {
    //             item.nodes.forEach(node => {
    //                 recursiveNodes(node)
    //             });
    //         } else {
    //             chapters.push(item);
    //         }
    //     }
    //     recursiveNodes(tree);
    //     return chapters;
    // }

    // const mongodber = require('../../utils/mongodber');
    // const db = mongodber.use('kb_plat');
    const id = 2142961663;
    const know_id = 2018115583;
    // const MongoClient = require('mongodb').MongoClient;
    // // 连接线上只读库必须设置useUnifiedTopology选项为true（堡垒机转发到线上库）
    // const client = await MongoClient.connect('', {useUnifiedTopology: true, useNewUrlParser: true});
    // const db = client.db('kb');
    // const proj = {
    //     has_modified: 0, // 这个字段不返回
    // };
    // let knowledgeTree = await db.collection('knowledge_tree').findOne({
    //     _id: id
    // }, proj);
    // const chapters = _getChapters(knowledgeTree)
    // console.log('结束', chapters);

    const res = await axios({
        method: 'get',
        url: `http://127.0.0.1:9500/kb_api/v2/knowledge_trees/${id}`,
        params: {
            api_key: 'iyunxiao_tester'
        }
    })
    // console.log(res.data);
    const getKnowledgesChapter = (knowIds, knowledgeTree) => {
        const knowledges = [];
        const recursiveNodes = (item) => {
            if (Array.isArray(item.children) && item.children.length > 0) {
                if (item.children[0].key === 'knowledge') {
                    item.children.forEach(know => {
                        if (knowIds.find(id => know.id === id)) {
                            knowledges.push({
                                ...know,
                                chapter_id: item.id,
                                chapter_name: item.name
                            });
                        }
                    })
                } else {
                    item.children.forEach(element => {
                        recursiveNodes(element);
                    })
                }
            }
        }
        recursiveNodes(knowledgeTree)
        return knowledges;
    }
    const knowledges = getKnowledgesChapter([know_id], res.data.knowledge_tree);
    console.log(knowledges);
})();


