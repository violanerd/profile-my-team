const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const getHtml = require('./src/generate-html');

// hardcoding data for test purposes
const manager = new Manager('Test', 1, 'me@me.com', 'lobby');
const engineer = new Engineer('Ava', 2, 'avae@me.com', 'm');
const intern = new Intern('Ira', 3, 'ira@me.com', 'Rice');

const dummydata = [getprofile(manager), getprofile(engineer), getprofile(intern)];

function getprofile(person) {
    let profile = [person.getName(), person.getId(), person.getEmail(), person.getRole()];
    if (person === manager){
        profile.push(person.getofficeNumber());
    } else if (person === engineer){
       profile.push(person.getGithub());
    } else {
       profile.push(person.getSchool());
    }
   
    return profile;
}

getHtml(dummydata);
