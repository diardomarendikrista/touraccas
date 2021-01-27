'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourTourist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TourTourist.init({
    tour_id: DataTypes.INTEGER,
    tourist_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourTourist',
  });
  return TourTourist;
};