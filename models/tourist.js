'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tourist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tourist.belongsToMany(models.Tour, { through: models.TourTourist, foreignKey: 'tourist_id'  });
    }

    getFullName() {
      return `${this.first_name} ${this.last_name}`;
    }
  };
  Tourist.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'nama depan tidak boleh kosong'
        }
      }
    },
    last_name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'umur tidak boleh kosong'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'nomor telepon tidak boleh kosong'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Tourist',
    hooks: {
      beforeCreate(instance, options) {
        !instance.last_name ? instance.last_name = instance.first_name : '';
      }
    }
  });
  return Tourist;
};