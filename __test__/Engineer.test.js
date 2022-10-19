

const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
  // it is what i expect it to do
  it("instantiates new engineer instance", () => {
    const engineer = new Engineer();
    // what should happen
    expect(typeof(engineer)).toBe('object');
  });
  it("constructor takes in a name, id, email and github", () => {
    const name = 'sam';
    const id = 3;
    const email = 'sam2000@yahoo.com';
    const github = 'sam2000'
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
  });
  it("receives github, role via methods", () => {
    const github = 'sam2000';
    const role = 'Engineer'
    const engineer = new Engineer('fanny', 24, 'fanny@gmail.com', github);

    expect(engineer.getGithub()).toBe(github);
    expect(engineer.getRole()).toBe(role);
  });
});