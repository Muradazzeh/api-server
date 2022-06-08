`use strict`
require("dotenv").config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");

const CarModel=require("./Cars.model")
const CarDetailsModel=require("./Cardetails.model")
const Collection = require("../lib/collection");


let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: { require: true, rejectUnauthorized: false},
                native: true
            }
        } : {};

        let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

        const carTable = CarModel(sequelize, DataTypes);
        const carDetailTable= CarDetailsModel(sequelize,DataTypes)
       

        const CarCollection= new Collection (carTable)
        const CarDetailsCollection= new Collection (carDetailTable)



        carTable.hasMany(carDetailTable, {
            foreignKey: "CarId",
            sourceKey: "id",
        });
        
        carDetailTable.belongsTo(carTable, {
            foreignKey: "CarId",
            targetKey: "id",
        });

     
        module.exports = {
            db: sequelize,
            CarTable:CarCollection,
            CarDetailsTable:CarDetailsCollection,


            // Car: Car(sequelize, DataTypes),
            // Hero:hero(sequelize,DataTypes)
        };