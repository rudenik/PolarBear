module.exports = function (sequelize, DataTypes)
{
    var Match = sequelize.define("Match", {
        user_one_id : {
            type: DataTypes.STRING,
            allowNull: false,

        },
        user_two_id : {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
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
        //TODO: Add Event ID to filter even IDS
      
    });

    return Match;
};