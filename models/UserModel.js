import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  gender: {
    type: Sequelize.ENUM("pria", "wanita"),
    defaultValue: null,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
}, {
  freezeTableName: true,
});

export default User;

(async () => {
  await db.sync({ force: true });
})();