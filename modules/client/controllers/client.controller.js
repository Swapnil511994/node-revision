import { addClient, deleteClient } from "../services/client.services.js";

export const addNewClient = async (req, res) => {
  try {
    const body = req.body;
    const addStatus = await addClient(body);
    res.json(addStatus);
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: "Unable to add new client" });
  }
};

export const deleteExistingClient = async (req, res) => {
  try {
    const params = req.params;
    const deleteStatus = await deleteClient(params.client_id);
    res.json(deleteStatus);
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Unable to delete client",
    });
  }
};
