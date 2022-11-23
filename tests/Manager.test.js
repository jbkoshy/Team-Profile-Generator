const Manager = require ('../lib/Manager');

describe("Manager", () => {
    it("Will the name be returned", () => {
        const obj = new Manager("Alan", "2", "alan@gmail.com", "University of Texas", "405");
        const testName = obj.getName();
        expect(testName).toBe("Alan")
    });

    it("Will the ID be returned", () => {
        const obj = new Manager("Alan", "2", "alan@gmail.com", "University of Texas", "405");
        const testId = obj.getId();
        expect(testId).toBe("2")
    });

    it("Will the email be returned", () => {
        const obj = new Manager("Alan", "2", "alan@gmail.com", "University of Texas", "405");
        const testEmail = obj.getEmail();
        expect(testEmail).toBe("alan@gmail.com")
    });

    it("Will the office number be returned", () => {
        const obj = new Manager("Alan", "2", "alan@gmail.com", "University of Texas", "405");
        const testOfficeNumber = obj.getOfficeNumber();
        expect(testOfficeNumber).toBe("405")
    });

    it("Will the roles be returned", () => {
        const obj = new Manager("Alan", "2", "alan@gmail.com", "University of Texas", "405");
        const testRole = obj.getRole();
        expect(testRole).toBe("Manager")
    });
});

