const { z } = require("zod");

const practitionerSchema = z.object({
  name: z.string().min(2, "El nombre del paciente es obligatorio"),
  speciality: z.string()
});

module.exports = practitionerSchema;