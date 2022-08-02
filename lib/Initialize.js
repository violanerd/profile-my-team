const [questions, intern, engineer] = require('../src/questions');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { writeFile } = require('node:fs/promises')
const generateHtml = require('../src/generate-html');

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
                    
                    this.check();
                })    
            };
    check(){
        if (this.nextPerson == 'Engineer'){
            inquirer.prompt(engineer)
                    .then(({name, id, email, github, nextPerson}) => {
                        this.dataArr.push(new Engineer(name, id, email, github));
                        this.nextPerson = nextPerson;
                        
                        this.check();
                    })
        } else if (this.nextPerson == 'Intern'){
            inquirer.prompt(intern)
                    .then(({name, id, email, school, nextPerson}) => {
                        this.dataArr.push(new Intern(name, id, email, school));
                        this.nextPerson = nextPerson;
                        
                        this.check();
                    })
        } else {
            console.log('Generating HTML');
            this.getHtml();
        }
    }
    getHtml(){
        let data = [];
        for(var i=0; i < this.dataArr.length; i++){
            let personData = {
                name: this.dataArr[i].getName(),
                id: this.dataArr[i].getId(),
                email: this.dataArr[i].getEmail(),
                title: this.dataArr[i].getRole(),
            }
            if (personData.title === ' Manager'){
                personData.last = this.dataArr[i].getofficeNumber();
                personData.icon = '<i class="fa-solid fa-mug-hot"></i>';
            } else if (personData.title === ' Engineer'){
                personData.last = this.dataArr[i].getGithub();
                personData.icon = '<i class="fa-solid fa-glasses"></i>';
            } else {
                personData.last = this.dataArr[i].getSchool();
                personData.icon = '<i class="fa-solid fa-user-graduate"></i>';
            }
            data.push(personData);
        }

        writeFile("./dist/index.html", generateHtml(data));
    }
}


module.exports = Initialize;
