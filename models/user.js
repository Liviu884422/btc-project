var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize,DataTypes) {
  return sequelize.define('User', {
    email:DataTypes.STRING,
    password:DataTypes.STRING
  },{
    timestamps:false,
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password,this.password)
      }
    },
    classMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password,this.password)
      }
    }
  }
)};


