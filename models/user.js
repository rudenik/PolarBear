module.exports = function (sequelize, DataTypes)
{
    var User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: [20]
            }
        }
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         max: [20]
        //     }
        // },
        // password_Salt: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         max: [140]
        //     }
        // }
    });

    User.associate = function (models)
    {
        // Associating Author with Posts
        User.hasOne(models.UserProfile, {
            foreignKey: {
                onDelete: "cascade"
            }
    });
};

return User;
};