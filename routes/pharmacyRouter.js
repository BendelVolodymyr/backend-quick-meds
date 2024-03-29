import express from "express";
import {
  getAllInventories,
  getAllPharmacy,
} from "../controllers/pharmacyControllers.js";

const pharmacyRouter = express.Router();
pharmacyRouter.get("/pharmacy", getAllPharmacy);
pharmacyRouter.get("/inventories/:id", getAllInventories);

export default pharmacyRouter;
