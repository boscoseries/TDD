var multiplyAllNumbers = require('./multiplyAllNumbersSolution');

describe("Multiply all numbers in the input", function() {

  test("Expect 5 and 5 to return 25", function() {
    expect(multiplyAllNumbers(5, 5)).toEqual(25);
  });
  test("Expect 2, 3, 5, 5, 12, 6 and 8 to return 86400", function() {
    expect(multiplyAllNumbers(2, 3, 5, 5, 12, 6, 8)).toEqual(86400);
  });
  test("Expect 7, -2, 0, -3 and 5 to return 0", function() {
    expect(multiplyAllNumbers(7, -2, 0, -3, 5)).toEqual(0)
  });
  test("Expect 'all NaN input(s)', to return NaN", function() {
    expect(multiplyAllNumbers('7', '2', '', '-3', '5')).toBeNaN();
  });
  test("Expect 1, 2, 3, 1, 's', true, and 10 to return 60", function() {
    expect(multiplyAllNumbers(1, 2, 3, 1, 's', true, 10)).toEqual(60);
  });
  test("Expect 0.1 and 0.2 to return 0.02", function() {
    expect(multiplyAllNumbers(0.1, 0.2)).toEqual(0.02);
  });
  test("Expect 1.23, 0.126, 19 and 0.009 to return 20.37", function() {
    expect(multiplyAllNumbers(1.23, 0.126, 19, 0.009)).toEqual(0.027);
  });

});