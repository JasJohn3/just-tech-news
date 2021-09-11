const {Model, DataTypes} =require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//Create our User Model
class User extends Model{}

//Define our table columns and configuration
User.init(
  {
    // Table Definitions go here
    // Define an id column
    id:{
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // Set as a primary key
      primaryKey: true,
      // set auto increment
      autoIncrement: true

    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true
      }
    },
    password: {
      // Define type as String
      type: DataTypes.STRING,
      // Cannot be Null
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len:[4]
      }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(userData){
        newUserData.password = await bcrypt.hash(newUserData.password,10);
        return newUserData;
      }
    }
  },
  {
    // Table Configurations options go here
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
      // make it so our model name stays lowercase in the database
      modelName: 'user'
  }
)

module.exports = User;