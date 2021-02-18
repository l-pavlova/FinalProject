function query(db, collectionName, operation, toArray = false, query = null, sort = null, values = null, limit = null) {
   let args = Array.from(arguments);
        let additionals=[];
        args.forEach(element => {
          if (element!=null) {
            additionals.push(element);
          }
        });


    db.collection(collectionName)[operation](...additionals, function (err, result) {
        if (err) { reject(err); return; }
        return result;
    })
}

/* 
     dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
  });

  */

  module.exports = query;