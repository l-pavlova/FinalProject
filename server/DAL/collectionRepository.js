export default class Repository {

    constructor(adapter, collectionName) {
        this._collection = adapter.getConnection().collection(collectionName);
    }
    
    async create(item) {
        await this._collection.insertOne(item, function (err, res) {
            if (err) {
                console.log(`errroorrr`);
                console.log(err);
                return;
            }
            return res;
        });
        console.log("1 document inserted");
    }

    async findOne(id) {
        await this._collection.findOne(id, (err, res) => {
            if (err) {
                throw err;
            }
            console.log("found document");
            return res;
        });
    }

    async find(query) {
        await this._collection.find(query).toArray((err, res) => {
            if (err) {
                throw err;
            }
            return res;
        });
        console.log("found documents");
    }

    async updateOne(query, item) {
        await this._collection.findOneAndUpdate(query, item, (err, res) => {
            if (err) {
                throw err;
            }
            return res;//returns the updated doc
        });
        console.log("1 document updated");
    }

    async update(query, item) {
        await this._collection.updateMany(query, item, (err, res) => {
            if (err) {
                throw err;
            }
            return res;
        })
        console.log("documents updated");
    }

    async delete(id) {
        await this._collection.findOneAndDelete(id, function (err, res) {
            if (err) {
                throw err;
            }
            return res;//returns the deleted doc
        });
        console.log("1 document deleted");
    }

    async bulkWrite(docs) {
        const bulk = this._collection.initializeOrderedBulkOp();

        for (let doc of docs) {
            bulk.insert(doc);
        }

        try {  // Execute the bulk with a journal write concern
            const result = await bulk.execute();
            return result;
        } catch (err) {
            console.log(err.stack);
            throw err;
        }
    }

    async sortByDate(query) {
        const docs = await this._collection.find(query).sort({datefield: -1}).toArray((err, docs) =>{
            if(err){
                throw err;
            }
            return docs;
        })
        console.log('returning sorted by date');
        return docs;
    }
}