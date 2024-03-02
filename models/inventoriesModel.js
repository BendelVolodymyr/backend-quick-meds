import { Schema, model } from "mongoose";
import { handleMongooseError } from "../middlewares/handleMongooseError.js";

const inventoriesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    weight: String,
    price: String,
    currency: String,
    availability: String,
    description: String,
    ingredients: String,
    warnings: String,
    breadcrumbs: String,
    images: [String],
    uniq_id: {
      type: String,
      required: true,
      unique: true,
    },
    scraped_at: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

inventoriesSchema.post("save", handleMongooseError);

export const Inventory = model("Inventories", inventoriesSchema);
