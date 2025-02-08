import { Router } from "express";

import * as stepController from "../controllers/steps.controller"


const router = Router();

router.get("/", stepController.getAllSteps)

router.post("/",stepController.createCounterSteps)

router.delete("/:id",stepController.deleteCounterSteps)

export default router;