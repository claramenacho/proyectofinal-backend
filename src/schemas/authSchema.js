const { z } = require('zod');

const registerSchema = z.object({
  username: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Formato de correo inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  role: z.enum(['user', 'admin']).optional() // Opcional, por defecto será 'user'
});

module.exports = { registerSchema };