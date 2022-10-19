

const Employee = require("../lib/Employee");

describe('Employee', () => {
  // it is what i expect it to do
  it("instantiates new employee instance", () => {
    const obj = new Employee();
    // what should happen
    expect(typeof(obj)).toBe('object');
  });
  it("constructor takes in a name, id, and email", () => {
    const name = 'Richard';
    const id = 2;
    const email = 'raseward@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
  });
  it("receives name, id, email, role via methods", () => {
    const name = 'JSON';
    const id = 4;
    const email = 'JSON2021@yahoo.com';
    const role = 'Employee'
    const employee = new Employee(name, id, email);

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe(role);
  });
});