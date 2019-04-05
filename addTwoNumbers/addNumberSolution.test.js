const addNumber = require("./addNumberSolution")

describe("Addition of Two Numbers", function () {

    test("Expect 2 and 5 to return 7", function () {
        expect(addNumber(2, 5)).toEqual(7)
    })
    test("Expect -1 and -2 to return -3", function () {
        expect(addNumber(-1, -2)).toEqual(-3)
    })
    test("Expect 0.1 and 0.2 to return 0.3", function () {
        expect(addNumber(0.1, 0.2)).toEqual(0.3)
    })
    test("Expect 'NaN input(s)' to return NaN", function () {
        expect(addNumber('@', 9)).toBeNaN()
    })

})