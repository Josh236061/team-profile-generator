

const Manager = require("../lib/Manager");

describe('Manager', () => {
  // it is what i expect it to do
  it("instantiates new manager instance", () => {
    const manager = new Manager();
    // what should happen
    expect(typeof(manager)).toBe('object');
  });
  it("constructor takes in a name, id, email and officeNumber", () => {
    const name = 'Dan';
    const id = 10;
    const email = 'dantheman@icloud.com';
    const officeNumber = '1072'
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
  });
  it("receives officeNUmber, role via methods", () => {
    const officeNumber = '2020';
    const role = 'Manager'
    const manager = new Manager('Dan', 10, 'dantheman@gmail.com', officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
    expect(manager.getRole()).toBe(role);
  });
});