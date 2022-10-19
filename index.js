

// require dependencies
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./generateHTML');

// create a roster- empty array with each new employee object pushed to the roster array
const roster = [];

// add team members
function newTeamMember() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'teamMembers',
                message: 'Which type of team member would you like to add?',
                choices: [
                'Engineer', 
                new inquirer.Separator(),
                'Intern', 
                new inquirer.Separator(),
                'I dont want to add any more team members']
            }
        ])
        .then((response) => {
            switch (response.teamMembers) {
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                default:
                    writeHTML(roster);
                    break;
            }
        });
};

// create new manager
function newManager() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team managers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team managers email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team managers office number?',
            },
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            roster.push(manager);
            newTeamMember();
        });
};

// create new engineer
function newEngineer() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your engineers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your engineers GitHub username?',
            },
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            roster.push(engineer);
            newTeamMember();
        });
};

// create new intern
function newIntern() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your interns id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is your interns school?',
            },
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            roster.push(intern);
            newTeamMember();
        });
};

// write the file
const writeHTML = (roster) => {
    // write file here
    fs.writeFileSync('sample.html', generateHTML(roster));
};

// initialize the team
newManager();