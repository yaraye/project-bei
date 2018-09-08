module.exports = function (sequelize, DataTypes) {
    var login = sequelize.define("login", {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            username: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING

            }
        },
        {
            freezeTableName: true,
            timestamps: false
        });
    return login;
};
  
