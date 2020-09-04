const user = require('./user')
const article = require('./articles')

module.exports = (router) => {
  user(router)
  article(router)
}