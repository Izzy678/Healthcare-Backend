'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Healthtestbooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Healthtestbooking.init({
    userId: DataTypes.STRING,
    testType: DataTypes.STRING,
    appointmentDate: DataTypes.DATE,
    appointmentTime: DataTypes.TIME,
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Healthtestbookings',
  });
  return Healthtestbooking;
};