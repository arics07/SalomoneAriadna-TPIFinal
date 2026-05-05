const express = require('express');
const patientController = require('../controllers/patientController');
const authenticateToken = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate')
const patientSchema = require('../validations/patient');

const router = express.Router();

// GET todos los pacientes 
router.get('/', patientController.getAllPatients);

// GET paciente por su id 
router.get('/:id', authenticateToken, patientController.getPatientById);

// POST nuevo paciente
router.post('/', authenticateToken, validate(patientSchema), patientController.createPatient);

// PUT paciente (editar) 
router.put('/:id', authenticateToken, validate(patientSchema), patientController.updatePatient);

// DELETE paciente
router.delete('/:id', authenticateToken, patientController.deletePatient);

module.exports = router;