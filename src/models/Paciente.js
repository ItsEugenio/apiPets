import {Schema,model} from "mongoose";

const pacienteSchema = new Schema({
    idPaciente: {
        type: String,
        require: true,
        trim: true
    },
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    edad: {
        type: Number,
        require: true,
        trim: true
    },
    fechaIngreso: {
        type: String,
        require: true,
        trim: true
    },
    tamañoPie: {
        type: Number,
        require: true,
        trim: true
    },
    rangoFlexion: {
        type: Number,
        require: true,
        trim: true
    },
    rangoExtension: {
        type: Number,
        require: true,
        trim: true
    },
    rangoInversion: {
        type: Number,
        require: true,
        trim: true
    },
    rangoEversion: {
        type: Number,
        require: true,
        trim: true
    },

}, {
    versionKey: false,
    timestamps: true //agrega el createAtt y updateAtt
});

export default model('Paciente',pacienteSchema)