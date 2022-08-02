class Employee {
    constructor(name = '', id = 1, email = 'me@me.com'){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${this.name}`;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: <a href="mailto:${this.email}">${this.email}</a>`;
    }

    getRole(){
        return 'Employee'; // don't know why we need this yet. 
    }
}

module.exports = Employee;