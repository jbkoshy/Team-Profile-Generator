const Engineer = require("../lib/Engineer");

test("Can the constructor's argument set the GitHub user account", () => {
    const testValue = "GHUser"
    const obj = new Engineer("John", 1 , "john@email.com", testValue);
    expect(obj.github).toBe(testValue);
});
test(`getRole() should return ${'Engineer'}`, () => {
    const testValue = "Engineer"
    const obj = new Engineer("John", 1 , "john@email.com", GHUser);
    expect(obj.getRole()).toBe(testValue);
});
test("Can the Github user be retrieved from getGH()", () => {
    const testValue = "GHUser"
    const obj = new Engineer("John", 1 , "john@email.com", testValue);
    expect(obj.getGithub()).toBe(testValue);
});