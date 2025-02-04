import { Router } from "express";

import * as petController from '../controllers/pet.controller'


const router = Router();

router.get("/p", (req, res) => {
    res.json({ message: "esta es mi api mascotas" });
  });

router.get("/", petController.getAllPets);

router.post("/", petController.createPet);

router.delete("/:idPet", petController.deletePet)



export default router;