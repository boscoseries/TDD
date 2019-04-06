var concatTwoStrings = require('./concatTwoStringsSolution');

describe("Concatenate Two Strings", function() {
  test("Expect 'a' and 'b' to return 'ab'", function() {
    expect(concatTwoStrings('a', 'b')).toEqual('ab');
  });
  test("Expect '1' and 's' to return '1s'", function() {
    expect(concatTwoStrings('1', 's')).toEqual('1s');
  });
  test("Expect '' and 'xy' to return 'xy'", function() {
    expect(concatTwoStrings('', 'xy')).toEqual('xy');
  })
  test("Expect '' and '' to return 'undefined'", function() {
    expect(concatTwoStrings('', '')).toBeUndefined();
  });
  test("Expect 2 and 'gh' to return 'undefined'", function() {
    expect(concatTwoStrings(2, 'gh')).toBeUndefined();
  });
  test("Expect true and true to return 'undefined'", function() {
    expect(concatTwoStrings(true, true)).toBeUndefined();
  });
  test("Expect 'true' and 'true' to return 'truetrue", function() {
    expect(concatTwoStrings('true', 'true')).toEqual('truetrue');
  });

});