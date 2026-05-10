const practitionerModel = require("../models/practitionerModel");

//Obtener todos los especialistas
exports.getAllPractitioners = async (req, res) => {
   try {
      const practitioners = await practitionerModel.find();
      res.json(practitioners);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


//Crear un nuevo especialista
exports.createPractitioner = async (req, res) => {
   try {
      const newPractitioner = await practitionerModel.create(req.body);
      res.status(201).json(newPractitioner);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


//Obtener especialista por ID
exports.getPractitionerById = async (req, res) => {
   try {
      const id = req.params.id;
      const practitioner = await practitionerModel.findById(id);

      if (!practitioner) {
         return res.status(404).json({ error: "Especialista no encontrado" });
      }

      res.json(practitioner);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


//Actualizar especialista
exports.updatePractitioner = async (req, res) => {
    try {
      const id = req.params.id;

      const updated = await practitionerModel.findByIdAndUpdate(
         id,
         req.body,
         { new: true }
      );

      if (!updated) {
         return res.status(404).json({ error: "Especialista no encontrado" });
      }

      res.json(updated);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};


// Eliminar especialista
exports.deletePractitioner = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await practitionerModel.findByIdAndDelete(id);

      if (!result) {
         return res.status(404).json({ error: "Especialista no encontrado" });
      }

      res.json({ message: "Especialista eliminado correctamente" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};