const { expect } = require("@jest/globals")
const Manager = require('../lib/Manager')

test('Test Manager Class', () => {
    const Jeff = new Manager("Jeff", 64, "mynameisjeff@msn.com", "Jeffisthename")
    let boolean
    if(typeof Jeff === "object") {
        boolean = true
    } else {
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Jeff.getRole()).toBe("Manager")
    expect(Jeff.getOfficeNumber()).toBe(Jeffisthename)
})