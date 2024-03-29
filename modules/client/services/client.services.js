import { db } from "../../../db.singleton.js";

export const deleteClient = async (clientId) => {
  try {
    const { Client } = db.models;
    const deletedRows = await Client.destroy({
      where: {
        client_id: clientId,
      },
    });
    if (deletedRows > 0) {
      return {
        status: true,
        message: "Client record deleted successfuly",
      };
    } else {
      return {
        status: false,
        message: "Unable to delete client records",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "error occurred while deleting client record",
    };
  }
};

export const addClient = async (clientData) => {
  try {
    const { Client } = db.models;
    const newClient = await Client.create(clientData);
    console.log("newClient", newClient);
    if (newClient?.client_id) {
      return {
        status: true,
        message: "Record created successfully",
        data: newClient,
      };
    } else {
      return {
        status: false,
        message: "Unable to create record",
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Error while creating new client",
      data: null,
    };
  }
};
