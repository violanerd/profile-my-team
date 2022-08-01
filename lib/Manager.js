const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name = '', id = 1, email = 'me@me.com', officeNumber = 'lobby'){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getRole() {
        super.getRole();
        return 'Manager';
    }

    getofficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;