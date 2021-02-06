class Group {
    constructor(name, members = [], messages = []){
        this.name = name;
        this.members = members;
        this.messages = messages;
    }
}

module.exports = Group;