module.exports = function (sequelize, DataTypes)
{
    var Events = sequelize.define("Events", {
        eventName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [20]
            }
        },
        eventCode: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [20]
            }
        }
    });

    Events.associate = function (models)
    {
        Events.belongsTo(models.userEvents, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return User;
};
