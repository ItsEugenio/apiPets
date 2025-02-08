import {Schema,model} from "mongoose";

const stepSchema = new Schema({
    namePet: {
        type: String,
        require: true,
        trim: true
    },
    steps: {
        type: Number,
        require: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true //agrega el createAtt y updateAtt
});

export default model('Step',stepSchema)