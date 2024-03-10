import { addClient, deleteClient } from "../services/client.services";

const addNewClient = async (req, res) => {
  try {
    const body = req.body;
    const addStatus = await addClient(body);
    res.json(addStatus);
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: "Unable to add new client" });
  }
};
