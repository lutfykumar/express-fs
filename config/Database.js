import { Sequelize } from "sequelize";

const db = new Sequelize('express', 'bangchan', 'sitaiyah', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true,
    paranoid: true,
  },
  logging: false
});

export default db;