module.exports = function (sequelize, DataTypes)
{
    var UserProfile = sequelize.define("UserProfile", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [20]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [20]
            }
        },
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [20]
            }
        },
        isEmployee: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
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
        UserProfile.belongsToMany(models.Events, {through: 'UserEvents' });
        UserProfile.belongsToMany(UserProfile,{through: models.Match, as: "Matches", foreignKey: "user_one_id", otherKey: "user_two_id"});
    };

    return UserProfile;
};