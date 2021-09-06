const { Model, DataTypes } = require("sequelize");

class ProjectTask extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        owner: DataTypes.STRING,
        done_at: DataTypes.DATE,
        expire_at: DataTypes.DATE,
      },
      {
        sequelize,
        updatedAt: "updated_at",
        createdAt: "created_at",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Project, { foreignKey: "project_id", as: "project" });
  }
}

module.exports = ProjectTask;
