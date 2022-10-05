const mongoose = require("mongoose")
const { Schema, model } = mongoose 

const tareaSchema = new Schema({
    title: String,
    description: String,
    tarea: [{ type: Schema.Types.ObjectId, ref: "Pedido" }],
    
})

module.exports = model("Tarea", tareaSchema)