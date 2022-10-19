

const Intern = require("../lib/Intern");

describe('Intern', () => {
  // it is what i expect it to do
  it("instantiates new intern instance", () => {
    const intern = new Intern();
    // what should happen
    expect(typeof(intern)).toBe('object');
  });
  it("constructor takes in a name, id, email and school", () => {
    const name = 'Allana';
    const id = 24;
    const email = 'allana24K@icloud.com';
    const school = 'DU'
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
  });
  it("receives school, role via methods", () => {
    const school = 'University of Denver';
    const role = 'Intern'
    const intern = new Intern('Nikki', 15, 'nikki1000@icloud.com', school);

    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe(role);
  });
});