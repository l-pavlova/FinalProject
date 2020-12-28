const Adapter = require("./adapter");

class Fascade {
    constructor() {
        this.adapter = {};
        this.userRepo = {};
        this.messageRepo = {};
        this.init();
    }
}

Fascade.prototype.init = async function () {
     this.adapter = await initAdapter();
     this.adapter.initCollections();
}


Fascade.prototype.saveUser = function(user) {
    this.userRepo.create(user);
}

async function initAdapter() {
    const adapter = new Adapter();
    try {
        await adapter.connect("mongodb://localhost:27017", "messaging-platform");
        return adapter;
    } catch (err) {
        console.log(err);
        return new Error("couldnt connect to db");
    }
}

module.exports = Fascade;