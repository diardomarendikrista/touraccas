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
   let tourists = JSON.parse(fs.readFileSync("./tourists.json", "utf-8"));
   tourists = tourists.map(tourists => {
     tourists.createdAt = new Date();
     tourists.updatedAt = new Date();
     return tourists;
   })
    return queryInterface.bulkInsert('Tourists', tourists, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tourists', null, {})
  }
};
