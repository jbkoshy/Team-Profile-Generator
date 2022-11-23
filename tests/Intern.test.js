const Intern = require ('../lib/Intern');

describe("Intern", () => {
    it("Will the name be returned", () => {
        const obj = new Intern("Alan", "2", "alan@gmail.com", "University of Texas");
        const testName = obj.getName();
        expect(testName).toBe("Alan")
    });

    it("Will the ID be returned", () => {
        const obj = new Intern("Alan", "2", "alan@gmail.com", "University of Texas");
        const testId = obj.getId();
        expect(testId).toBe("2")
    });

    it("Will the email be returned", () => {
        const obj = new Intern("Alan", "2", "alan@gmail.com", "University of Texas");
        const testEmail = obj.getEmail();
        expect(testEmail).toBe("alan@gmail.com")
    });

    it("Will the name of the school be returned", () => {
        const obj = new Intern("Alan", "2", "alan@gmail.com", "University of Texas");
        const testSchool = obj.getSchool();
        expect(testSchool).toBe("University of Texas")
    });

    it("Will the roles be returned", () => {
        const obj = new Intern("Alan", "2", "alan@gmail.com", "University of Texas");
        const testRole = obj.getRole();
        expect(testRole).toBe("Intern")
    });
});
