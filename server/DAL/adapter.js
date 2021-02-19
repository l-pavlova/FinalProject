const  {MongoClient} = require('mongodb');
const { createCollection, deleteCollection } = require("./dbSchemas/collections.js");
const {MONGO_HOST, MONGO_PROD} = require('../constants/config.js');
const {DB_NAME} = require('../constants/config.js');
const collections = require("./dbSchemas/collectionMappings.js");


class Adapter {
    constructor() {
        this.dbClient = MongoClient;
        this.db = null;
    }
}

Adapter.prototype.connect = async function connect(connectionString, dbname) {
    var client = new MongoClient(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: false
    });
    await client.connect().then(client => {
        console.log(`Connected to database ${dbname}`);
        this.db = client.db(dbname);
        return this.db;
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });
    /*await this.dbClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: false
    }).then(client => {
        console.log(`Connected to database ${dbname}`);
        this.db = client.db(dbname);
        return this.db;
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });*/
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
    console.log(MONGO_PROD);
    const PROD = "mongodb+srv://admin:FKpPjBy1H15EJ9p9@cluster0.nvd7u.mongodb.net/messagingAppDb?retryWrites=true&w=majority&authSource=admin"
    try {
        await adapter.connect(PROD, DB_NAME);
        return adapter;
    } catch (err) {
        console.log(err);
        return new Error("couldnt connect to db");
    }
}

Adapter.prototype.createObjectId = function(id) {
    return new MongoClient.ObjectID(id);
}

module.exports = Adapter;
