const fs = require("fs");
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let tours = JSON.parse(fs.readFileSync("./tours.json", "utf-8"));
   tours = tours.map(tours => {
     tours.createdAt = new Date();
     tours.updatedAt = new Date();
     return tours;
   })
    return queryInterface.bulkInsert('Tours', tours, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tours', null, {})
  }
};
