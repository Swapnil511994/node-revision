import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ProjectItem = sequelize.define(
    "ProjectItem",
    {
      project_item_id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
      },
      project_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      item_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      status_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      item_quantity: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
      },
      cost_ea: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      labor_cost_ea: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      labor_cost_ea_value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      edited_labor_cost_ea: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      labor_cost_percentage: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      manual_item_completion_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING(512),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      modified_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      client_id: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      created_by: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      modified_by: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      margin: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      sell_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      created_by: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      modified_by: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      profit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      delivery_type: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      allocation_percentage: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true,
      },
      quote_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      discount: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true,
      },
      tax: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true,
      },
      discount_type: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      total_cost: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true,
      },
      net_cost: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "modified_at",
      tableName: "t_project_items",
    }
  );

  ProjectItem.associate = ({ ProjectItemUser, Client }) => {
    ProjectItem.belongsTo(ProjectItemUser, {
      foreignKey: "project_item_id",
      targetKey: "project_item_id",
      as: "project_item_user",
    });

    ProjectItem.belongsTo(Client, {
      foreignKey: "client_id",
      targetKey: "client_id",
      as: "client",
    });
  };
  return ProjectItem;
};
