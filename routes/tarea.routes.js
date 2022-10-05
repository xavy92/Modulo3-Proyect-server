

const router = require("express").Router()
// const mongoose = require("mongooose")

const Tarea = require("../models/Tarea.model")
const Pedido = require("../models/Pedido.model")
const { response } = require("../app")

//create a new tarea
router.post("/tarea", (req, res, next) => {
    const { title, description, id } = req.body

    Tarea.create({ title, description, pedido: id })
      .then((newTarea) => {
        return Pedido.findByIdAndUpdate(id, {
            $push: { tarea: newTarea._id }
        })
      })
      .then((response) => res.json(response))
      .catch((err) => res.json(err))
})

module.exports = router