'use strict';
const { UUIDV4 } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HealthTestBookings', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      testType: {
        type: Sequelize.ENUM,
        values: ['X-ray','HIV','Blood Test', 'Covid Test', 'MRI','Urine Analysis'],
        allowNull: false,
      },
      appointmentDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      appointmentTime: {
        allowNull:false,
        type: Sequelize.TIME
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Healthtestbookings');
  }
};