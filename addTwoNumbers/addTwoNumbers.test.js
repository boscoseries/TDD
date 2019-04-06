var addTwoNumbers = require('./addTwoNumbersSolution');

describe("Addition of Two Numbers", function () {

    test("Expect 2 and 5 to return 7", function () {
        expect(addTwoNumbers(2, 5)).toEqual(7);
    });
    test("Expect -1 and -2 to return -3", function () {
        expect(addTwoNumbers(-1, -2)).toEqual(-3);
    });
    test("Expect 0.1 and 0.2 to return 0.30", function () {
        expect(addTwoNumbers(0.1, 0.2)).toEqual(0.30);
    });
    test("Expect 0.915 and 0.11 to return 1.03", function () {
        expect(addTwoNumbers(0.915, 0.11)).toEqual(1.03);
    });
    test("Expect 'NaN input(s)' to return NaN", function () {
        expect(addTwoNumbers('@', 9)).toBeNaN();
    });
    test("Expect 'Boolean input(s)' to return NaN", function() {
        expect(addTwoNumbers(true, true)).toBeNaN();
    });

})