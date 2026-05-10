const appointmentModel = require("../models/appointmentModel");

// Obtener todos los turnos
exports.getAllAppointments = async (req, res) => {
   try {
      const appointments = await appointmentModel.find();
      res.json(appointments);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Crear un nuevo turno
exports.createAppointment = async (req, res) => {
   try {
      const newAppointment = await appointmentModel.create(req.body);
      res.status(201).json(newAppointment);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Obtener turno por ID
exports.getAppointmentById = async (req, res) => {
   try {
      const id = req.params.id;
      const appointment = await appointmentModel.findById(id);

      if (!appointment) {
         return res.status(404).json({ error: "Turno no encontrado" });
      }

      res.json(appointment);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Actualizar turno
exports.updateAppointment = async (req, res) => {
   try {
      const id = req.params.id;

      const updated = await appointmentModel.findByIdAndUpdate(
         id,
         req.body,
         { new: true }
      );

      if (!updated) {
         return res.status(404).json({ error: "Turno no encontrado" });
      }

      res.json(updated);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Eliminar turno
exports.deleteAppointment = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await appointmentModel.findByIdAndDelete(id);

      if (!result) {
         return res.status(404).json({ error: "Turno no encontrado" });
      }

      res.json({ message: "Turno eliminado correctamente" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};