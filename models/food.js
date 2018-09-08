module.exports = function (sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
          name: {type: DataTypes.STRING},
          dish: {type: DataTypes.TEXT},
          ingredients: {type: DataTypes.TEXT},
          instruction: {type: DataTypes.TEXT}

      },
      {
          freezeTableName: true,
          timestamps: false
      });
  return Food;
};