
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("Please enter the team manager's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: idInput => {
            if (idInput){
                return true;
            } else {
                console.log("Please enter their ID number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: email => {
            if (email){
                return true;
            } else {
                console.log('Please enter their email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: officeNum => {
            if (officeNum){
                return true;
            } else {
                console.log('Please enter their office number.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextPerson',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
    }
];

const intern = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("Please enter your Intern's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?",
        validate: idInput => {
            if (idInput){
                return true;
            } else {
                console.log("Please enter their ID number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?",
        validate: email => {
            if (email){
                return true;
            } else {
                console.log('Please enter their email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?",
        validate: schoolInput => {
            if (schoolInput){
                return true;
            } else {
                console.log('Please enter their school.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextPerson',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
    }
]
const engineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("Please enter your Engineer's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?",
        validate: idInput => {
            if (idInput){
                return true;
            } else {
                console.log("Please enter their ID number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?",
        validate: email => {
            if (email){
                return true;
            } else {
                console.log('Please enter their email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?",
        validate: gitInput => {
            if (gitInput){
                return true;
            } else {
                console.log('Please enter the GitHub Username.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextPerson',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
    }
]

module.exports = [questions, intern, engineer];