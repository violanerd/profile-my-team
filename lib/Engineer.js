const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name = '', id = 1, email = 'me@me.com', gitHub = 'violanerd'){
        super(name, id, email);

        this.gitHub = gitHub;
    }

    getRole() {
        super.getRole();
        return ' Engineer';
    }
    
    getGithub() {
        return `Github: <a href="https://github.com/${this.gitHub}" target="_blank">${this.gitHub}</a>`;
    }
}

module.exports = Engineer;