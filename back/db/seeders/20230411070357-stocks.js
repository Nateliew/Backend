"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stocks", [
      // {
      //   name: "AAPL",
      //   price: 161.5,
      //   image: "https://storage.googleapis.com/iex/api/logos/AAPL.png",
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
      // {
      //   name: "META",
      //   price: 214.75,
      //   image: "https://storage.googleapis.com/iex/api/logos/META.png",
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stocks", null, {});
  },
};
