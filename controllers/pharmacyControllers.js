import { listInventories, listPharmacy } from "../services/pharmacyServices.js";

export const getAllInventories = async (req, res, next) => {
  try {
    const inventory = await listInventories(req.query);
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
