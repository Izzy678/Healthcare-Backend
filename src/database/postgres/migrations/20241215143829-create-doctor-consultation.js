'use strict';
const { UUIDV4, DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DoctorConsultations', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
      },
      patientId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      doctorId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      consultationType: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['TEXT','VIDEO']
      },
      consultationDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      consultationTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DoctorConsultations');
  }
};