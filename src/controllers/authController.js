const User = require('../models/User');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    
    // 1. Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 2. Crear usuario
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role
    });
    
    await newUser.save();
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

module.exports = { register };