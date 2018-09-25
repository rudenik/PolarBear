'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Events', [{
        eventName: 'TECH Event',
        eventCode: 'A141',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventName: 'Tech Event 123',
        eventCode: 'B341',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventName: 'Event Event',
        eventCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
