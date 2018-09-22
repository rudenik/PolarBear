module.exports = function (sequelize, DataTypes)
{
    var Events = sequelize.define("Events", {
        eventName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                max: [20]
            }
        },
        eventCode: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    });

    Events.associate = function (models)
    {
        Events.belongsToMany(models.User, {through: 'UserEvents'});
    };


    return Events;
};