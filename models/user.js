module.exports = function (sequelize, DataTypes)
{
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [20]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [20]
            }
        },
        card1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [140]
            }
        },
        card2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [140]
            }
        },
        card3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [140]
            }
        }
    });



    return User;
};
