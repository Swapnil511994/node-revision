import { Sequelize } from "sequelize";
import { config } from "./config.js";

import ProjectItem from "./modules/project-items/Models/project-item.model.js";
import ProjectItemUser from "./modules/project-item-users/Models/project-item-users.model.js";
import Client from "./modules/client/models/client.model.js";

class Database {
  constructor() {
    throw new Error("Use Database.getInstance() to load db singleton");
  }

  static async getInstance() {
    if (!Database.instance) {
      const sequelize = new Sequelize(
        config.mysql.db,
        config.mysql.user,
        config.mysql.password,
        {
          host: config.mysql.host,
          dialect: "mysql",
          port: config.mysql.port,
        }
      );

      try {
        await sequelize.authenticate();
        ProjectItem(sequelize);
        ProjectItemUser(sequelize);
        Client(sequelize);

        Object.keys(sequelize.models).forEach((modelName) => {
          if (sequelize.models[modelName].associate) {
            sequelize.models[modelName].associate(sequelize.models);
          }
        });

        Database.instance = sequelize;
      } catch (error) {
        console.error("Unable to connect to the DB: ", error);
        process.exit(1);
      }
    }
    return Database.instance;
  }
}

export const db = await Database.getInstance();
