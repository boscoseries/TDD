var getRepo = require('./getRepositoriesSolution');

jest.mock('./getRepositoriesSolution')


describe("Get a user's repositories from Github API", function() {

  test("Expect getRepository() to have been called with argument 'input'", function(done) {
    var test = jest.fn();
    getRepo(test, 'input');
      expect(test).toHaveBeenCalledWith('input');
      done();
  })
  test("Expect getRepo('username') to have length 3", async function(done) {
    var test = jest.fn();
    var username = 'input'
    var result = await getRepo(test, username)
    expect(result).toHaveLength(3);
    done();
  });
  test("Expect getRepo('username')  to be an array containing 3 repos", async function(done) {
    var test = jest.fn();
    var username = 'input'
    var result = await getRepo(test, username)
    expect(result).toEqual(expect.arrayContaining(['repo1', 'repo2', 'repo3']));
    done();
  });
  test("Expect getRepository() to Throw with argument ''", function(done) {
    var test = jest.fn();
    var username = '';
      expect(function() { return getRepo(test, username) }).toThrowError('error message')
    done();
  })
  test("Expect getRepository() to Throw with argument '{user: 1}'", function(done) {
    var test = jest.fn();
    var username = {user: 1};
      expect(function() { return getRepo(test, username) }).toThrowError('error message')
    done();
  })


});