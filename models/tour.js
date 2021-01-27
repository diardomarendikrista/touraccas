'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tour.belongsToMany(models.Tourist, { through: models.TourTourist, foreignKey: 'tour_id'  });
    }
  };
  Tour.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'nama tour tidak boleh kosong'
        }
      }
    },
    destination: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'destinasi tidak boleh kosong'
        }
      }
    },
    current_tourists: DataTypes.INTEGER,
    max_tourists: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};