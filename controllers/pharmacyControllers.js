import { listInventories, listPharmacy } from "../services/pharmacyServices.js";

export const getAllInventories = async (req, res, next) => {
  try {
    const { id } = req.params;
    const inventory = await listInventories(id, req.query);
    res.status(200).json(inventory);
  } catch (error) {
    next(error);
  }
};

export const getAllPharmacy = async (req, res, next) => {
  try {
    const pharmacy = await listPharmacy();
    res.status(200).json(pharmacy);
  } catch (error) {
    next(error);
  }
};
