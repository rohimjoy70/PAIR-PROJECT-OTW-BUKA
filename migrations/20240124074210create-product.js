'use strict';
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull : false,
      },
      imageURL: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull : false,
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
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Products');
  }
};