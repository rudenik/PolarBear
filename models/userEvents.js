module.exports = function (sequelize, DataTypes)
{
    var UserEvents = sequelize.define("userEvents", {
     
    });

    Post.associate = function (models)
    {

        User.belongsToMany(models.User,{through: models.UserEvents});
        Events.belongsToMany(models.Events , {through: models.UserEvents});
        
    };


    return User;
};
