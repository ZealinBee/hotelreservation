const express = require('express')
const router = express.Router()
const reservationController = require('../controllers/reservation')

router.get('/getReservation', reservationController.getReservation)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router