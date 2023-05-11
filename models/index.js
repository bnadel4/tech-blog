const User = require('./User');
const newLocal = './Post';
const Post = require(newLocal);

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
module.exports = { User, Post };
