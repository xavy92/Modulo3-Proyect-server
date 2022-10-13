const mongoose = require("mongoose")
const { Schema, model } = mongoose 

const pedidoSchema = new Schema({
    title: String,
    description: String,
    productos: [{ type: Schema.Types.ObjectId, ref: "Producto" }],

},{timestamps: true})

module.exports = model("Pedido", pedidoSchema)