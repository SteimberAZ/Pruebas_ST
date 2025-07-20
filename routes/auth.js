const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// LOGIN
router.post('/login', (req, res) => {
  const { user, contrasena } = req.body;
  const db = req.app.get('db');

  db.query('SELECT * FROM usuarios WHERE user = ?', [user], async (err, results) => {
    if (err) return res.status(500).send('Error en la base de datos');

    if (results.length === 0) {
      return res.status(401).send('Usuario no encontrado');
    }

    const usuario = results[0];
    if (contrasena !== usuario.contrasena) {
    return res.status(401).send('Contraseña incorrecta');
  }

    res.send('Inicio de sesión exitoso');
  });
});

module.exports = router;
