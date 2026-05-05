const z = require("zod");

const userSchema = z.object({ 
    email: z.string().trim().email("Email inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});

module.exports = userSchema;