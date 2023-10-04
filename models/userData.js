import { sequelize } from "../config/sequelize.js";
import { Sequelize, DataTypes } from "sequelize";


const UserData = sequelize.define('UserData', {
    studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export {UserData};
