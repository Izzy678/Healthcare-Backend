'use strict';
const { UUIDV4, DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 'd1bbeedd-3a99-4735-b4b2-1978710c61e9',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: '$2b$10$GejzCZ51b6xUkBp3k2kah.yJUlUK/I0TL20i1RFzrs1igSX1pfguW',
        role: 'DOCTOR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '78d7fd44-80ef-4183-8d04-a41d38a32bea',
        firstName: 'jean',
        lastName: 'rammon',
        email: 'jean@gmail.com',
        password: '$2b$10$GejzCZ51b6xUkBp3k2kah.yJUlUK/I0TL20i1RFzrs1igSX1pfguW',
        role: 'DOCTOR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'bec4373e-a027-4a23-a085-a52039fb72ab',
        firstName: 'Bella',
        lastName: 'pinter',
        email: 'pinter@gmail.com',
        role: 'DOCTOR',
        password: '$2b$10$GejzCZ51b6xUkBp3k2kah.yJUlUK/I0TL20i1RFzrs1igSX1pfguW',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
