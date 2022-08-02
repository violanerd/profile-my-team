const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile } = require('node:fs/promises')
const getHtml = require('./src/generate-html');

// hardcoding data for test purposes
const manager = new Manager('Test', 1, 'me@me.com', 'lobby');
const engineer = new Engineer('Ava', 2, 'ava@me.com', 'm');
const intern = new Intern('Ira', 3, 'ira@me.com', 'Rice');

let data = [];
function getprofile(person) {
    let personData = {
        name: person.getName(),
        id: person.getId(),
        email: person.getEmail(),
        title: person.getRole(),
    }
    if (person === manager){
        personData.last = person.getofficeNumber();
        personData.icon = '<i class="fa-solid fa-mug-hot"></i>';
    } else if (person === engineer){
        personData.last = person.getGithub();
        personData.icon = '<i class="fa-solid fa-glasses"></i>';
    } else {
        personData.last = person.getSchool();
        personData.icon = '<i class="fa-solid fa-user-graduate"></i>';
    }
    data.push(personData);
}

getprofile(manager); 
getprofile(engineer); 
getprofile(intern);


const newData = getHtml(data);

writeFile("./dist/index.html", newData);