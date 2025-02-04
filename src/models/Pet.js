import {Schema,model} from "mongoose";

const petSchema = new Schema({
    namePet: {
        type: String,
        require: true,
        trim: true
    },
    typePet: {
        type: String,
        require: true,
        trim: true
    },
    rangePet: {
        type: String,
        require: true,
        trim: true
    },
})

export default model('Pet',petSchema)