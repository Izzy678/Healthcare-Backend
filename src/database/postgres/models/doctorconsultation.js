'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorConsultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorConsultation.init({
    patientId: DataTypes.STRING,
    doctorId: DataTypes.STRING,
    consultationType: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DoctorConsultation',
  });
  return DoctorConsultation;
};