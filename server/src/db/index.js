"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = void 0;
const sequelize_1 = require("sequelize");
const defUser = (db) => db.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.DataTypes.STRING,
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
});
const getDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const op = sequelize_1.Op;
    const operatorsAliases = {
        $in: op.in
    };
    const db = new sequelize_1.Sequelize("", "", "", {
        dialect: "sqlite",
        storage: "./db.sqlite",
        operatorsAliases,
        logging: false
    });
    const users = defUser(db);
    return { users };
});
exports.getDB = getDB;
