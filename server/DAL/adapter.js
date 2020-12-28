import  MongoClient from 'mongodb'
import { createCollection, deleteCollection } from "./dbSchemas/collections.js";

import collections from "./dbSchemas/collectionMappings.js";


export default class Adapter {
    constructor() {
        this.dbClient = MongoClient;
        this.db = null;
    }
}

Adapter.prototype.connect = async function connect(connectionString, dbname) {
    await this.dbClient.connect(connectionString,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(client => {
        console.log(`Connected to database ${dbname}`);
        this.db = client.db(dbname);
        return this.db;
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });
}

Adapter.prototype.initCollections = function() {
    collections.forEach((schema, key) => {
        createCollection(this.db, key, schema);
        //deleteCollection(this.db, key);
    });
}

Adapter.prototype.getConnection = function() {
    return this.db;
}
