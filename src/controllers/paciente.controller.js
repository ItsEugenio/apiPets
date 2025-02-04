import Paciente from "../models/Paciente";

export const getAllPacientes = async (req, res) => {
    try {
      const pacientes = await Paciente.find();
      res.json(pacientes);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Algo fallo al obtener pacientes",
      });
    }
  };

export const createPaciente = async (req, res) => {
  
    try {
      const newPaciente = new Paciente({
        idPaciente: req.body.idPaciente,
        nombre: req.body.nombre,
        edad: req.body.edad,
        fechaIngreso: req.body.fechaIngreso,
        tamañoPie: req.body.tamañoPie,
        rangoFlexion: req.body.rangoFlexion,
        rangoExtension: req.body.rangoExtension,
        rangoInversion: req.body.rangoInversion,
        rangoEversion: req.body.rangoEversion,
      });
      const pacienteSaved = await newPaciente.save();
  
      res.json(pacienteSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Algo fallo al crear",
      });
    }
  };

  export const updatePaciente = async (req, res) => {
    const { idPaciente } = req.params;
  
    try {
      const updatedPaciente = await Paciente.findOneAndUpdate(
        { idPaciente: idPaciente }, // Buscando por idPaciente que es un string
        {
          $set: {
            nombre: req.body.nombre,
            edad: req.body.edad,
            fechaIngreso: req.body.fechaIngreso,
            tamañoPie: req.body.tamañoPie,
            rangoFlexion: req.body.rangoFlexion,
            rangoExtension: req.body.rangoExtension,
            rangoInversion: req.body.rangoInversion,
            rangoEversion: req.body.rangoEversion,
          },
        },
        { new: true } // Esto asegura que se devuelva el documento actualizado
      );
  
      if (!updatedPaciente) {
        return res.status(404).json({
          message: "Paciente no encontrado",
        });
      }
  
      res.json(updatedPaciente);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Algo falló al actualizar",
      });
    }
  };
  

  export const deletePaciente = async (req, res) => {
    const { idPaciente } = req.params;
  
    try {
      const deletedPaciente = await Paciente.findOneAndDelete({ idPaciente: idPaciente });
  
      if (!deletedPaciente) {
        return res.status(404).json({
          message: "Paciente no encontrado",
        });
      }
  
      res.json({
        message: "Paciente eliminado exitosamente",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Algo falló al eliminar",
      });
    }
  };