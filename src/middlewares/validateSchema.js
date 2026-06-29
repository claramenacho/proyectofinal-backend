const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next(); // Si los datos son válidos, continúa al controlador
  } catch (error) {
    // Si hay error, enviamos los detalles del error de Zod
    return res.status(400).json({ errors: error.errors.map(err => err.message) });
  }
};

module.exports = { validateSchema };