const { Model, DataTypes } = require("sequelize");

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        updatedAt: "updated_at",
        createdAt: "created_at",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ProjectTask, { foreignKey: "project_id", as: "tasks" });
  }
}

module.exports = Project;
