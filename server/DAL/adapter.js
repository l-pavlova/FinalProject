const mongoose = require('mongoose')
class Adapter {
    constructor() {
        this.db = mongoose;
    }
}

Adapter.prototype.connect = async function connect(connectionString) {
    const con = await this.db.connect(connectionString,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    });

    console.log(`Connected to db ${con.connections[0]._connectionString} on port ${con.connections[0].port}`);
}

Adapter.prototype.disconnect = function disconnect() {
    this.db.disconnect().then((res) => {
        console.log(`Disconnected from db`);
        console.log(res);
    });
}

module.exports = Adapter;