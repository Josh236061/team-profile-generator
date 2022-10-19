

// require dependencies, employee.js
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // from employee.js
        super(name, id, email, 'Engineer');    

        this.github = github;
    }
    // prompt github return engineer
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;