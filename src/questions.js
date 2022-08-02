
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
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
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?"
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
        message: "What is your engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?"
    },
    {
        type: 'list',
        name: 'nextPerson',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
    }
]

module.exports = [questions, intern, engineer];