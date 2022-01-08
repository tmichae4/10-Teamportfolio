const { expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test('Test Employee Class', () => {
    const Pam = new Employee("Pam", 10, "ruthjimeniz@gmail.com<")
    let boolean;
    if(typeof Pam === "object") {
        boolean = true
    }  else {
          boolean = false  
    }

    expect(boolean).toBe(true)
    expect(Pam.getRole()).toBe("Employee")
})