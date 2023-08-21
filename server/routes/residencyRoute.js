import express from "express"
import jwtCheck from "../config/auth0Config.js";
import { createResidency } from "../controllers/residencyCntrl.js";
import { getAllResidencies } from "../controllers/residencyCntrl.js";
import { getResidency } from "../controllers/residencyCntrl.js";
const router = express.Router()

router.post("/create", jwtCheck,createResidency)
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency)

export {router as residencyRoute};