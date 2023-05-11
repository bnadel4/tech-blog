const {User} = require('../models');

const userData = [
  {id: 1,
    username: 'dave',
    password: '12345678'
  },
  {id: 2,
    username: 'jim',
    password: '12345678'
  },
  {id: 3,
    username: 'steve',
    password: '12345678'
  }
]

const seedUser = ()=> User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
})

module.exports = seedUser;