const { z } = require("zod");

const practitionerSchema = z.object({
  name: z.string().min(2, "El nombre del especialistaes obligatorio"),
  specialty: z.string()
});

module.exports = practitionerSchema;