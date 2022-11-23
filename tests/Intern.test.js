const Intern = require("../lib/Intern");

test("Can the constructor's argument set the name of the school", () => {
    const testValue = "UT"
    const intern = new Engineer("Cena", 1 , "cena@email.com", testValue);
    expect(intern.school).toBe(testValue);
});
test(`getRole() should return ${'Intern'}`, () => {
    const testValue = "Intern"
    const obj = new Intern("Cena", 1 , "cena@email.com", "UT");
    expect(obj.getRole()).toBe(testValue);
});
test("Can the name of the school be retrieved from getSchool()", () => {
    const testValue = "UH"
    const obj = new Intern("Cena", 1 , "cena@email.com", testValue);
    expect(obj.getSchool()).toBe(testValue);
});
