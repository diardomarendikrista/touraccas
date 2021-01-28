const { hashing } = require('../helpers/bcrypt');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account.init({
    user: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'username tidak boleh kosong'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password tidak boleh kosong'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'email tidak boleh kosong'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = hashing(instance.password);
      }
    },
    sequelize,
    modelName: 'Account',
  });
  return Account;
};