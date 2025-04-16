const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController'); // Adjust path based on your structure

// Route to get all available slots for booking
router.get('/slots', appointmentController.getAvailableSlots);

// Route to book an appointment
router.post('/', appointmentController.bookAppointment);

// Route for lawyer to accept or reject an appointment
router.put('/:id/status', appointmentController.updateAppointmentStatus);

module.exports = router;