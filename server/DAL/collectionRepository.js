export default class Repository {

    constructor(adapter, collectionName) {
        this._collection = adapter.getConnection().collection(collectionName);
    }
//todo: rewrite with better err handling and promises
    create(item) {
        this._collection.insertOne(item, function (err, res) {
            if (err) {
                console.log(`errroorrr`);
                console.log(err); return;}

            console.log("1 document inserted");
            return res;
        });
    }

    update(query, item) {
        this._collection.updateOne(query, item, (err, res) => {
            if (err) throw err;
            console.log("1 document updated");
            return res;
        });
    }

    delete(id) {
        this._collection.deleteOne(id, function (err, res) {
            if (err) throw err;
            console.log("1 document deleted");
            return res;
        });
    }

    find(query) {
        this._collection.find(query).toArray((err, res) => {
            if (err) throw err;
            console.log(res);
            return res;
        });
    }

    findOne(id) {
        this._collection.findOne(id, (err, res) => {
            if (err) throw err;
            console.log(res.name);
            return res;
        });
    }
}