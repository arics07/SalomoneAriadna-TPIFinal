const { z } = require("zod");

const patientSchema = z.object({
  name: z.string().min(2, "El nombre del paciente es obligatorio"),
  dni: z.string().min(7, "El DNI es obligatorio."),
  email: z.string().optional(),
  phone: z.string().min(7, "El número de teléfono es obligatorio"),
  notes: z.string().optional()
});

module.exports = patientSchema;