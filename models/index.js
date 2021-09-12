const User = require("./User");
const Post = require("./Post");

// create relationship between User and Posts in our database
User.hasMany(Post,{
  // create a foreign key in User Table
  foreignKey:'user_id'
});

Post.belongsTo(User,{
  // Create a foreign key in Post Table
  foreignKey:'user_id'
});
// create relationship between User and Posts in our database
module.exports = { User, Post };
