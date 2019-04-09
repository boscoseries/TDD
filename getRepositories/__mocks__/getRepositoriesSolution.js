var fakeData = [
  'repo1',
  'repo2',
  'repo3'
];

module.exports = function getRepositories(callback, username) {
  if (username && typeof username === 'string') {
    callback(username);
    return Promise.resolve(fakeData).then(function (data) {
      return data;
    });
  } else {
    throw new Error('error message');
  }
};