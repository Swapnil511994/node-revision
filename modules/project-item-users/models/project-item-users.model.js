import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ProjectItemUser = sequelize.define(
    "ProjectItemUser",
    {
      project_item_user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      project_item_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      modified_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamp: true,
      createdAt: "created_at",
      updatedAt: "modified_at",
      tableName: "t_project_item_users",
    }
  );

  ProjectItemUser.associate = ({ ProjectItem }) => {
    ProjectItemUser.belongsTo(ProjectItemUser, {
      foreignKey: "project_item_id",
      target_key: "project_item_id",
      as: "project_item_user",
    });
  };

  return ProjectItemUser;
};
