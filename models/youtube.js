module.exports = function (sequelize, DataTypes) {
    var YouTube = sequelize.define("YouTube", {
            id: {type: DataTypes.STRING, primaryKey: true},
            link: {type: DataTypes.STRING}

        },
        {
            freezeTableName: true,
            timestamps: false
        });
    return YouTube;
};