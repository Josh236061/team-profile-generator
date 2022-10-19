

// require dependencies, employee.js
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // from employee.js
        super(name, id, email, 'Manager');
        
        this.officeNumber = officeNumber;
    }
    // prompt officeNumber, return manager
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;