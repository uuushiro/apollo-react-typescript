import { Sequelize, DataTypes, Op } from 'sequelize';

const defUser = (db: Sequelize) =>
  db.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

export const getDB = async () => {
  const op = Op;
  const operatorsAliases = {
    $in: op.in
  };

  const db = new Sequelize("", "", "", {
    dialect: "sqlite",
    storage: "./db.sqlite",
    operatorsAliases,
    logging: false
  });
  const users = defUser(db);

  return { users };
};
export type Users = ReturnType<typeof defUser>;
export type DataBaseStore = ReturnType<typeof getDB> & {
  users: Users;
};