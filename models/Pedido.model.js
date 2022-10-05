const mongoose = require("mongoose")
const { Schema, model } = mongoose 

const pedidoSchema = new Schema({
    title: String,
    description: String,
    tarea: [{ type: Schema.Types.ObjectId, ref: "Tarea" }],

})

module.exports = model("Pedido", pedidoSchema)