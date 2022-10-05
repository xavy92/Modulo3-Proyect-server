//rutas
const router = require("express").Router()

const mongoose = require ("mongoose")

const Pedido = require("../models/Pedido.model")
const Tarea = require("../models/Tarea.model")

//Create a new pedido
router.post("/pedido", (req, res, next) => {
    const { title, description } = req.body
    
    //crear un nuevo proyecto con la info de req.body
    Pedido.create({ title, description, tastk: []})
      .then((response) => res.json(response))
      .catch((err) => res.json(err))
})

router.get("/pedidos", (req, res, next) => {

    Pedido.find()
    // .populate("tareas")
    .then((allpedidos) => res.json(allpedidos))
    .catch((err) => res.json(err))
})

router.get("/pedidos/:id", (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({message: "Specified id is not valid"})
        return
    }


    Pedido.findById(id)
    //   .populate("tareas")
      .then(pedido => res.status(200).json(pedido))
      .catch((err) => res.json(err))
})

router.put("/pedido/:id", (req, res, next) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({message: "Specified id is not valid"})
        return
    }


    Pedido.findByIdAndUpdate(id, req.body, {new: true})
      .then((updatePedido) => res.json(updatePedido))
      .catch((err) => res.json(err))
}) 

router.delete("/pedido/:id", (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({message: "Specified id is not valid"})
        return
    }


    Pedido.findByIdAndRemove(id)
      .then(() => res.json({
        message: `Pedido with ${id} is removed successfully.`,

      }))
      .catch((err) => res.json(err))
}) 


module.exports = router;