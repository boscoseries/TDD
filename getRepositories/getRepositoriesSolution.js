var fetch = require('node-fetch')

module.exports = async function getRepositories(username) {
  if (!username) return new Error('error message');

    await fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
        data.forEach(obj => {
          return (obj.name);
        })
      })
}