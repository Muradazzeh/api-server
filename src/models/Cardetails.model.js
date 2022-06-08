`use strict`

const CarDetails= (sequelize, DataType) =>
sequelize.define('CarDetails', {
    fuelType: {
        type: DataType.STRING,
        allowNull: false,
    },
    WheelDrive: {
        type: DataType.STRING,
        allowNull: false,
    },
    MaxSpeed: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    CarId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
});

module.exports = CarDetails;