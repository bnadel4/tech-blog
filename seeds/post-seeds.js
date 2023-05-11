const {Post} = require('../models');
const postData = [
  {
    id: 1,
    title: 'javascript lessons',
    body: 'lorum ipsum',
    user_id: 1
  },
  {
    id: 2,
    title: 'Express lessons',
    body: 'lorum ipsum',
    user_id: 2
  },
  {
    id: 3,
    title: 'MongoDB lessons',
    body: 'lorum ipsum',
    user_id: 3
  }
] 

const seedPost = ()=> Post.bulkCreate(postData);
module.exports = seedPost;