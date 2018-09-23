module.exports = function (sequelize, DataTypes)
{
    var UserProfile = sequelize.define("UserProfile", {
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
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        UserProfile.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
        UserProfile.belongsToMany(models.Events, {through: 'UserEvents'});
        
    };

    return UserProfile;
};