var addAllNumbers = require('./addAllNumbersSolution');

describe("Add all numbers", function () {

  test("Expect 12 and 1 to return 13", function () {
    expect(addAllNumbers(12, 1).toEqual(13));
  });
  test("Expect 2, 3, 5, 5, 12, 6 and 8 to return 41", function () {
    expect(addAllNumbers(2, 3, 5).toEqual(41));
  });
  test("Expect 7, -2, 0, -3 and 5 to return 7", function () {
    expect(addAllNumbers(7, -2, 0, -3, 5).toEqual(7))
  });
  test("Expect 'NaN input(s)', to return NaN", function () {
    expect(addAllNumbers(7, 2, '', -3, 5).toBeNaN());
  });
  test("Expect 0.1 and 0.2 to return 0.30", function () {
    expect(addAllNumbers(0.1, 0.2).toEqual(0.30));
  });
  test("Expect 1.23, 0.126, 19 and 0.009 to return 20.37", function () {
    expect(addAllNumbers(1.23, 0.126, 19, 0.009).toEqual(20.37));
  });
})