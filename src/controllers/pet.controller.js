import Pet from "../models/Pet";


export const getAllPets = async (req, res) => {

  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo fallo al obtener mascotas",
    });
  }
};

export const createPet = async (req, res) => {

  try {
    const newPet = new Pet({
      namePet: req.body.namePet,
      typePet: req.body.typePet,
      rangePet: req.body.rangePet,
    });

    const petSaved = await newPet.save();

    res.json(petSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo fallo al crear",
    });
  }
};

export const deletePet = async (req, res) => {
  const { idPet } = req.params;

  try {
    const deletePet = await Pet.findOneAndDelete({ _id: idPet });

    if (!deletePet) {
      return res.status(404).json({
        message: "Mascota no encontrada",
      });
    }

    res.json({
      message: "Mascota eliminada exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo falló al eliminar",
    });
  }
};





