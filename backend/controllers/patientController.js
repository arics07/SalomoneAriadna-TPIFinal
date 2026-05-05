const patientModel = require("../models/patientModel");

// Obtener todos los pacientes
exports.getAllPatients = async (req, res) => {
   try {
      const patients = await patientModel.getAllPatients();
      res.json(patients);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Crear un nuevo paciente
exports.createPatient = async (req, res) => {
   try {
      const newPatient = await patientModel.createPatient(req.body);
      res.status(201).json(newPatient);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Obtener paciente por ID
exports.getPatientById = async (req, res) => {
   try {
      const id = req.params.id;
      const patient = await patientModel.getPatientById(id);

      if (!patient) {
         return res.status(404).json({ error: "Paciente no encontrado" });
      }

      res.json(patient);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Actualizar paciente
exports.updatePatient = async (req, res) => {
   try {
      const id = req.params.id;

      const updated = await patientModel.updatePatient(id, req.body);

      if (!updated) {
         return res.status(404).json({ error: "Paciente no encontrado" });
      }

      res.json(updated);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Eliminar paciente
exports.deletePatient = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await patientModel.deletePatient(id);

      if (!result) {
         return res.status(404).json({ error: "Paciente no encontrado" });
      }

      res.json({ message: "Paciente eliminado correctamente" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};