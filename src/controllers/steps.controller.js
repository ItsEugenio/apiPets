    import Step from "../models/Steps";

    export const getAllSteps = async (req, res) => {
    try {
        const steps = await Step.find();
        res.json(steps);
    } catch (error) {
        res.status(500).json({
        message: error.message || "Algo fallo al solicitar los registros",
        });
    }
    };

    export const createCounterSteps = async (req, res) => {
    
    if (!req.body.namePet && !req.body.steps) {
        return res
        .status(400)
        .send({ message: "El contenido no puede estas vacio" });
    }

    try {
        const newSteps = new Step({
        namePet: req.body.namePet,
        steps: req.body.steps,
        });
        const stepsSaved = await newSteps.save();

        res.json(stepsSaved);
    } catch (error) {
        res.status(500).json({
        message: error.message || "Algo fallo al crear el registro",
        });
    }
    };

    export const deleteCounterSteps = async (req, res) => {
    const { id } = req.params;
    try {
        await Step.findByIdAndDelete(req.params.id);
        res.json({
        message: "Registro eliminido correctamente",
        });
    } catch (error) {
        res.status(500).json({
        message:
            error.message || `Algo fallo al eliminar al Registro con el id ${id}`,
        });
    }
    };