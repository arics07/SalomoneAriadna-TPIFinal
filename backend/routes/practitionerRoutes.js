const express = require('express');
const practitionerController = require('../controllers/practitionerController');
const authenticateToken = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate')
const practitionerSchema = require('../validations/practitioner');

const router = express.Router();

// GET todos los especialistas 
router.get('/', practitionerController.getAllPractitioners);

// GET especialista por su id 
router.get('/:id', authenticateToken, practitionerController.getPractitionerById);

// POST nuevo especialista
router.post('/', authenticateToken, validate(practitionerSchema), practitionerController.createPractitioner);

// PUT especialista (editar) 
router.put('/:id', authenticateToken, validate(practitionerSchema), practitionerController.updatePractitioner);

// DELETE especialista
router.delete('/:id', authenticateToken, practitionerController.deletePractitioner);

module.exports = router;