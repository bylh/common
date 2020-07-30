// 用户去重

db.rbac_user.aggregate([
    {
        $group:{_id:{id:'$id'},count:{$sum:1},dups:{$addToSet:'$_id'}}
    },
    {
        $match:{count:{$gt:1}}
    }

    ]).forEach(function(it){

         it.dups.shift();
            db.rbac_user.remove({_id: {$in: it.dups}});

    });