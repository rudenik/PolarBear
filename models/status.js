module.exports = function (sequelize, DataTypes)
{
    var Status = sequelize.define("Status", {
       code : {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        timestamps: false
    });

    return Status;
};