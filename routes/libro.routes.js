

const router = require("express").Router()
const mongoose = require("mongoose")

const Libro = require("../models/Libro.model")
const Pedido = require("../models/Pedido.model")

//create a new Libro
// router.post("/libro", (req, res, next) => {
//     const { title, description, img, precio, id } = req.body

//     Libro.create({ title, description, img, precio, pedido: id })
//       .then((newlibro) => {
//         return Pedido.findByIdAndUpdate(id, {
//             $push: { tarea: newlibro._id }
//         })
//       })
//       .then((response) => res.json(response))
//       .catch((err) => res.json(err))
// })

router.post("/libro", (req, res, next) => {
  const { title, description, img, precio } = req.body
  
  //crear un nuevo libro con la info de req.body
  Libro.create({ title, description, img, precio})
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
})

router.get("/libro", (req, res, next) => {

  Libro.find()
  // .populate("tareas")
  .then((allpedidos) => res.json(allpedidos))
  .catch((err) => res.json(err))
})

router.get("/libro/:id", (req, res, next) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({message: "Specified id is not valid"})
      return
  }


  Libro.findById(id)
  //   .populate("tareas")
    .then(libro => res.status(200).json(libro))
    .catch((err) => res.json(err))
})

router.put("/libro/:id", (req, res, next) =>{
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({message: "Specified id is not valid"})
      return
  }


  Libro.findByIdAndUpdate(id, req.body, {new: true})
    .then((updateLibro) => res.json(updateLibro))
    .catch((err) => res.json(err))
}) 

router.delete("/libro/:id", (req, res, next) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({message: "Specified id is not valid"})
      return
  }


  Libro.findByIdAndRemove(id)
    .then(() => res.json({
      message: `Libro with ${id} is removed successfully.`,

    }))
    .catch((err) => res.json(err))
}) 

module.exports = router