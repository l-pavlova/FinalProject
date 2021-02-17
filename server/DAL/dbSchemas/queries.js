function query(db, collectionName, operation, toArray = false, query = null, sort = null, values = null, limit = null) {
   let args = Array.from(arguments);
        let additionals=[];
        args.forEach(element => {
          if (element!=null) {
            additionals.push(element);
          }
        });
        console.log(additionals);
        console.log(...additionals);


    db.collection(collectionName)[operation](...additionals, function (err, result) {
        console.log(additionals);
        console.log(...additionals);
        if (err) { reject(err); return; }
        console.log(result.name);
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