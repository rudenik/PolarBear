module.exports = function (sequelize, DataTypes)
{
    var UserProfile = sequelize.define("UserProfile", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [20]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [20]
            }
        },
        card1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [140]
            }
        },
        card2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [140]
            }
        },
        card3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [140]
            }
        }
    });

    UserProfile.associate = function (models)
    {
        UserProfile.belongsToMany(models.Events, { through: 'UserEvents' });
        UserProfile.belongsToMany(UserProfile,{through: models.Match, as: "Matches", foreignKey: "user_one_id", otherKey: "user_two_id"});
    };

    return UserProfile;
};