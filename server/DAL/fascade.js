const Adapter = require("./adapter");
const BaseRepository = require("./baseRepository");


class Fascade {
    constructor() {
        this.adapter = initAdapter().then((res) => this.initRepositories(res).bind(this));
        this.userRepo = {};
        this.messageRepo = {};
    }
}

Fascade.prototype.initRepositories = function () {
    this.userRepo = new BaseRepository(mongoose.connection.db, 'User');
    this.messageRepo = new BaseRepository(mongoose.connection.db, "Message");
}


Fascade.prototype.saveUser = function(user) {
    this.userRepo.create(user);
}

function initAdapter() {
    return new Promise(() => {
        var adapter = new Adapter();
        adapter.connect('mongodb://localhost/messaging-platform');
        return adapter;
    });
}

module.exports = Fascade;