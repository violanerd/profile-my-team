const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = 1, email = 'me@me.com', school = 'Rice'){
        super(name, id, email);

        this.school = school;
    }
    
    getRole(){
        super.getRole();
        return ' Intern';
    }

    getSchool() {
        return `School: ${this.school}`;
    }
}

module.exports = Intern;