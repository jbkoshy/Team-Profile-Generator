const Engineer = require ('../lib/Engineer');

describe("Engineer", () => {
    it("Will the name be returned", () => {
        const obj = new Engineer("Alan", "2", "alan@gmail.com", "alan123");
        const testName = obj.getName();
        expect(testName).toBe("Alan")
    });

    it("Will the ID be returned", () => {
        const obj = new Engineer("Alan", "2", "alan@gmail.com", "alan123");
        const testId = obj.getId();
        expect(testId).toBe("2")
    });

    it("Will the email be returned", () => {
        const obj = new Engineer("Alan", "2", "alan@gmail.com", "alan123");
        const testEmail = obj.getEmail();
        expect(testEmail).toBe("alan@gmail.com")
    });

    it("Will the username of the GitHub be returned", () => {
        const obj = new Engineer("Alan", "2", "alan@gmail.com", "alan123");
        const testGithub = obj.getGithub();
        expect(testGithub).toBe("alan123")
    });

    it("Will the roles be returned", () => {
        const obj = new Engineer("Alan", "2", "alan@gmail.com", "alan123");
        const testRole = obj.getRole();
        expect(testRole).toBe("Engineer")
    });
});