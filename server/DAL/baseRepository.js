const mongoose = require('mongoose')

module.exports = class BaseRepository {

    constructor(db, collectionName) {
        this._collection = db.collection(collectionName);
    }
  
    async create(item){
        const result = await this._collection.insert(item);
        
        return !!result.result.ok;
      }
    update(id, item){
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    find(item) {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
}