const Employee = require ('../lib/Employee');

describe("Employee", () => {
    it("Will the name be returned", () => {
        const obj = new Employee("Alan", "2", "alan@gmail.com");
        const testName = obj.getName();
        expect(testName).toBe("Alan")
    });

    it("Will the ID be returned", () => {
        const obj = new Employee("Alan", "2", "alan@gmail.com");
        const testId = obj.getId();
        expect(testId).toBe("2")
    });

    it("Will the email be returned", () => {
        const obj = new Employee("Alan", "2", "alan@gmail.com");
        const testEmail = obj.getEmail();
        expect(testEmail).toBe("alan@gmail.com")
    });
    it("Will the roles be returned", () => {
        const obj = new Employee("Alan", "2", "alan@gmail.com");
        const testRole = obj.getRole();
        expect(testRole).toBe("Employee")
    });
});