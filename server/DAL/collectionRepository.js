module.exports = class Repository {

    constructor(adapter, collectionName) {
        this.adapter = adapter;
        this._collection = adapter.getConnection().collection(collectionName);
    }

    async create(item) {
        return await this._collection.insertOne(item);
    }

    async find(query) {
        return await this._collection.find(query).toArray();
    }

    async findById(id) {
        const o_id = this.adapter.createObjectId(id);
        return await this._collection.findOne({ '_id': o_id }); 
    }

    async updateOne(id, item) {
        const o_id = this.adapter.createObjectId(id);
        console.log(id);
        const filter = { '_id': o_id };
        const options = { upsert: true };
        
        const user = this.findById(id).then(u => console.log(u));

        const result = await this._collection.updateOne(filter, item, options);
        console.log(result.message);
        return result;
    }

    async update(query, item) {
        return await this._collection.updateMany(query, item);
    }

    async delete(id) {
        return await this._collection.findOneAndDelete(id);
    }

    async bulkWrite(docs) {
        const bulk = this._collection.initializeOrderedBulkOp();

        for (let doc of docs) {
            bulk.insert(doc);
        }

        try { // Execute the bulk with a journal write concern
            return await bulk.execute();
        } catch (err) {
            console.log(err.stack);
            throw err;
        }
    }

    async sortByDate(query) {
        return await this._collection.find(query).sort({ datefield: -1 }).toArray();
    }
}