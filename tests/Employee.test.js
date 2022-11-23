const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can Employee argument be initialized", () => {
        const obj = new Employee();
        expect(typeof(obj)).toBe("object");
    });
    it("Can the constructor's argument set the name", () => {
        const name = "Babu";
        const obj = new Employee(name);
        expect(obj.name).toBe(name);
    });
    it("Can the constructor's argument set the id", () => {
        const testValue = 1998;
        const obj = new Employee("Babu", testValue);
        expect(obj.id).toBe(testValue);
    });
    it("Can the constructor's argument set the email", () => {
        const testValue = "koshy@gmail.com";
        const obj = new Employee("Babu", 1, testValue);
        expect(obj.email).toBe(testValue);
    });
    describe ("getName", () => { 
        it("Can name be retrieved from getName()", () => {
            const testValue = "Babu";
            const obj = new Employee(testValue);
            expect(obj.getName()).toBe(testValue);
        });
    });
    describe ("getId", () => { 
        it("Can Id be retrieved from getId()", () => {
            const testValue = 2022;
            const obj = new Employee("Babu", testValue);
            expect(obj.getId()).toBe(testValue);
        });
    });
    describe ("getEmail", () => { 
        it("Can Email be retrieved from getEmail()", () => {
            const testValue = "koshyjeremy@gmail.com";
            const obj = new Employee("Babu", 1, testValue);
            expect(obj.getemail()).toBe(testValue);
        });
    });
    describe ("getRole", () => { 
        it(`getRole() should return ${'Employee'}`, () => {
            const testValue = "Employee";
            const obj = new Employee("Babu", 1, "koshyjeremy@gmail.com");
            expect(obj.getRole()).toBe(testValue);
        });
    });     
});
