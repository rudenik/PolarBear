'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      Example:
      return queryInterface.bulkInsert('Statuses', [{
        code: 0,
        name: "Pending"
      },{
        code: 1,
        name: "Accepted"
      },{
        code: 2,
        name: "Declined"
      }
    ]);
   
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
