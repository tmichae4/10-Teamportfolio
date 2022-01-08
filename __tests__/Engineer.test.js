const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test('Test Engineer Class', () => {
    const Mia = new Engineer("Mia", 13, "miagotfood@yahoo.com", "Miacakes9")
    let boolean
    if(typeof Mia === "object") {
        boolean = true
    } else {
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Mia.getRole()).toBe("Engineer")
    expect(Mia.getGitHub()).toBe("Miacakes9")
})