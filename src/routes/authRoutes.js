// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');
const { validateSchema } = require('../middlewares/validateSchema');
const { registerSchema } = require('../schemas/authSchema');
// Ruta pública para registrar usuarios
router.post('/register', register);

module.exports = router;