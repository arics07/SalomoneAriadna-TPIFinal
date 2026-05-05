const { z } = require("zod");

const appointmentSchema = z.object({
  patient: z.string().min(1, "El paciente es obligatorio"),
  practitioner: z.string().min(1, "El profesional es obligatorio"),
  date: z.string().datetime("Fecha inválida"),
  status: z.enum(["confirmado", "en espera", "atendido", "cancelado"]).optional(),
  notes: z.string().optional()
});

module.exports = appointmentSchema;