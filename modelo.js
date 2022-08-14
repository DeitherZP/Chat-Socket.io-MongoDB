const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    id_cliente:{
        type: String
    },
    mensaje:{
        type: String
    }
}, 
    {
        timestamps: true
    },
    {collection: 'Mensajes'})

module.exports = model("Mensajes", userSchema)