'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TourTourists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tour_id: {
        type: Sequelize.INTEGER,
        references : {
          model: 'Tours',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      tourist_id: {
        type: Sequelize.INTEGER,
        references : {
          model: 'Tourists',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TourTourists');
  }
};