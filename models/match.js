module.exports = function (sequelize, DataTypes)
{
    var Match = sequelize.define("Match", {
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn:[[0, 1]]
            }
        },
        action_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
               isInt: true
            }
        }
      
    });

    return Match;
};