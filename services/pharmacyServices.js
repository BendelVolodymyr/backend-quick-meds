import HttpError from "../middlewares/HttpErrors.js";
import { Inventory } from "../models/inventoriesModel.js";
import { Pharmacy } from "../models/pharmacyModel.js";

export async function listInventories(id, query) {
  const { page = 1, limit = 10, favorite } = query;
  const skip = (page - 1) * limit;

  if (favorite !== undefined) {
    filter.favorite = favorite;
  }
  const data = await Inventory.find({ ingredients: id }, "-scraped_at ", {
    skip,
    limit,
  });
  if (data.length === 0) {
    throw HttpError(400, "Data not found");
  }
  return data;
}

export async function listPharmacy() {
  const data = await Pharmacy.find();
  return data;
}
