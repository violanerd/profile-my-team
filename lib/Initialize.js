const [questions, intern, engineer] = require('../src/questions');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Initialize {
    constructor(){
        this.dataArr = [];
        this.nextPerson;
    }
    initialize(){
        inquirer.prompt(questions)
                .then(({name, id, email, officeNumber, nextPerson}) => {
                    this.dataArr.push(new Manager(name, id, email, officeNumber));
                    this.nextPerson = nextPerson;
                    console.log(this.dataArr, this.nextPerson);
                    
                    this.check();
                })    
            };
    check(){
        if (this.nextPerson == 'Engineer'){
            inquirer.prompt(engineer)
                    .then(({name, id, email, github, nextPerson}) => {
                        this.dataArr.push(new Engineer(name, id, email, github));
                        this.nextPerson = nextPerson;
                        console.log(this.dataArr, this.nextPerson);
                        
                        this.check();
                    })
        } else if (this.nextPerson == 'Intern'){
            inquirer.prompt(intern)
                    .then(({name, id, email, school, nextPerson}) => {
                        this.dataArr.push(new Intern(name, id, email, school));
                        this.nextPerson = nextPerson;
                        console.log(this.dataArr, this.nextPerson);
                        
                        this.check();
                    })
        } else {
            console.log('Generating HTML');
        }
    }
}


module.exports = Initialize;



