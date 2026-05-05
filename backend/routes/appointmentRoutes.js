const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const authenticateToken = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate')
const appointmentSchema = require('../validations/appointment');

const router = express.Router();

// GET todos los turnos 
router.get('/', appointmentController.getAllAppointments);

// GET un turno por su id 
router.get('/:id', authenticateToken, appointmentController.getAppointmentById);

// POST nuevo turno
router.post('/', authenticateToken, validate(appointmentSchema), appointmentController.createAppointment);

// PUT turno (editar) 
router.put('/:id', authenticateToken, validate(appointmentSchema), appointmentController.updateAppointment);

// DELETE turno 
router.delete('/:id', authenticateToken, appointmentController.deleteAppointment);

module.exports = router;
