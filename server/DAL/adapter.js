import MongoClient from 'mongodb'
import { createCollection, deleteCollection } from "./dbSchemas/collections.js";
import { MONGO_HOST } from '../constants/config.js';
import { DB_NAME } from '../constants/config.js';
import collections from "./dbSchemas/collectionMappings.js";


export default class Adapter {
    constructor() {
        this.dbClient = MongoClient;
        this.db = null;
    }
}

Adapter.prototype.connect = async function connect(connectionString, dbname) {
    await this.dbClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
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
        // deleteCollection(this.db, key);
    });
}

Adapter.prototype.getConnection = function() {
    return this.db;
}

Adapter.prototype.initialize = async function() {
    const adapter = new Adapter();
    try {
        await adapter.connect(MONGO_HOST, DB_NAME);
        return adapter;
    } catch (err) {
        console.log(err);
        return new Error("couldnt connect to db");
    }
}

Adapter.prototype.createObjectId = function(id) {
    return new MongoClient.ObjectID(id);
}