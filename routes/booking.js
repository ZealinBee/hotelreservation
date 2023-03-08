const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/booking')

router.get('/', bookingController.getBookingPage)
router.post('/createBooking', bookingController.createBooking)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router