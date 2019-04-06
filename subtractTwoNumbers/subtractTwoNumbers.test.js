var subtractTwoNumbers = require("./subtractTwoNumbersSolutuion");

describe("Subtraction of Two Numbers", function() {

    test("Expect 12 and 10 to return 2", function() {
        expect(subtractTwoNumbers(12, 10)).toEqual(2);
    });
    test("Expect -1 and -2 to return 1", function() {
        expect(subtractTwoNumbers(-1, -2)).toEqual(1);
    });
    test("Expect 0.2 and 0.1 to return 0.10", function() {
        expect(subtractTwoNumbers(0.2, 0.1)).toEqual(0.10);
    });
    test("Expect 5.95 and 2.54 to return 3.41", function() {
        expect(subtractTwoNumbers(5.95, 2.54)).toEqual(3.41);
    });
    test("Expect '5.95' and 2.54 to return NaN", function() {
        expect(subtractTwoNumbers('5.95', 2.54)).toBeNaN();
    });
    test("Expect 'NaN input(s)' to return NaN", function() {
      expect(subtractTwoNumbers(9, '@')).toBeNaN();
  });
    test("Expect 'Boolean input(s)' to return NaN", function() {
        expect(subtractTwoNumbers(true, true)).toBeNaN();
    });

})