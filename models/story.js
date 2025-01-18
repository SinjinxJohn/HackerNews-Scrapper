const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/db');
// const { Types } = require('mysql2');


const Story = sequelize.define('Story',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    url:{type:DataTypes.STRING,allowNull:false},
    createdAt:{type:DataTypes.DATE,defaultValue:DataTypes.NOW},
})

module.exports = Story;