const mongoose = require("mongoose")
const { Schema, model } = mongoose 

const LibroSchema = new Schema({
    title: String,
    description: String,
    img: String,
    precio: Number,    
},{timestamps: true})

module.exports = model("Libro", LibroSchema)