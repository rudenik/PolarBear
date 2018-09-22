module.exports = function (sequelize, DataTypes)
{
    var Connections = sequelize.define("Connections", {
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
        },
        action_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
               isInt: true
            }
        }
    });

    return Connections;
};