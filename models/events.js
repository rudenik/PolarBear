module.exports = function (sequelize, DataTypes)
{
    var Events = sequelize.define("Events", {
        eventName: {
            type: DataTypes.TEXT,
            allowNull: false,
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
        Events.belongsToMany(models.UserProfile, {through: 'UserEvents'});
    };


    return Events;
};