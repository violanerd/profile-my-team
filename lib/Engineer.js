const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name = '', id = 1, email = 'me@me.com', gitHub = 'violanerd'){
        super(name, id, email);

        this.gitHub = gitHub;
    }
    getRole() {
        super.getRole();
        return 'Engineer';
    }
    getGithub() {
        return this.gitHub;
    }
}

module.exports = Engineer;