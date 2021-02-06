const  MongoClient = require('mongodb');
const { createCollection, deleteCollection } = require("./dbSchemas/collections.js");
const {MONGO_HOST} = require('../constants/config.js');
const {DB_NAME} = require('../constants/config.js');
const collections = require("./dbSchemas/collectionMappings.js");


class Adapter {
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

Adapter.prototype.initialize = async function () {
    const adapter = new Adapter();
    try {
        await adapter.connect(MONGO_HOST, DB_NAME);
        return adapter;
    } catch (err) {
        console.log(err);
        return new Error("couldnt connect to db");
    }
}

module.exports = Adapter;
