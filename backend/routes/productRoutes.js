const express = require("express");
const router = express.Router();

// Ejemplo de ruta para obtener productos
router.get("/products", (req, res) => {
  res.json({ message: "List of products" });
});

module.exports = router;
