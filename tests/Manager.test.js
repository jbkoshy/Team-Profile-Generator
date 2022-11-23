const Manager = require("../lib/Manager");

test("Can the constructor's argument set the office number", () => {
    const testValue = 123
    const obj = new Manager("Larry", 1 , "larry@email.com", testValue);
    expect(obj.officeNumber).toBe(testValue);
});
test(`getRole() should return ${'Manager'}`, () => {
    const testValue = "Manager"
    const obj = new Manager("Larry", 1 , "larry@email.com", 123);
    expect(obj.getRole()).toBe(testValue);
});
test("Can the office number be retrieved from getOfficeNumber()", () => {
    const testValue = 321
    const obj = new Manager("Larry", 1 , "Larry@email.com", testValue);
    expect(obj.getOfficeNumber()).toBe(testValue);
});

