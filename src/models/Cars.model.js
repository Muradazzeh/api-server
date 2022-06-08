`use strict`

const Car=(Sequelize,DataTypes)=>
        Sequelize.define("Car",{
            CarName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
    
            EngineSize: {
                type: DataTypes.STRING,
            },
            Manufacturer: {
                type: DataTypes.STRING,
            },
           Country: {
                type: DataTypes.STRING,
            },
    
        });
    
    module.exports = Car;