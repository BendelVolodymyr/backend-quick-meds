import { Schema, model } from "mongoose";
import { handleMongooseError } from "../middlewares/handleMongooseError.js";

const pharmaciesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

pharmaciesSchema.post("save", handleMongooseError);

export const Pharmacy = model("Pharmacies", pharmaciesSchema);
