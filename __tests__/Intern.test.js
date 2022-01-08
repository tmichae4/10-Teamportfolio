const { expect } = require("@jest/globals")
const Intern = require('../lib/Intern');

test('Test Intern Class', () => {
    const Max = new Intern("Max", 43, "Maxamillion@aol.com", "NC State")
    let boolean
    if(typeof Max === "object") {
        boolean = true
    } else {
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Max.getRole()).toBe("Intern")
    expect(Max.getSchool()).toBe("NC State")
})