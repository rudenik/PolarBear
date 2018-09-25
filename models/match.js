/*{
    user_one_id 
    user_two_id 
    status
    action_user_id
}*/

module.exports = function (sequelize, DataTypes)
{
    var Match = sequelize.define("Match", {

        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [[0, 1]]
            }
        },
        action_user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isInt: true
            }
        }
        //TODO: Add Event ID to filter even IDS

    });

    return Match;
};