import { Inventory } from "../models/inventoriesModel.js";
import { Pharmacy } from "../models/pharmacyModel.js";

export async function listInventories(query) {
  const { page = 1, limit = 10 } = query;
  const skip = (page - 1) * limit;

  const data = await Inventory.find().skip(skip).limit(limit);
  return data;
}

export async function listPharmacy() {
  const data = await Pharmacy.find();
  return data;
}
