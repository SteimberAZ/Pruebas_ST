const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// REDIRIGIR AL LOGIN
router.post('/relogin', (req, res) => {

  return res.redirect('/dist/login.html');
  
});
// REDIRIGIR AL MAIN DE LOS USUARIOS
router.post('/remesa', (req, res) => {

  return res.redirect('/dist/mainUsuario.html');
  
});
// REDIRIGIR AL Cronometro
router.post('/recrono', (req, res) => {
  return res.redirect('/dist/Cronometro.html');
});
// REDIRIGIR ALA PANTALLA DE PAGO
router.post('/ppago', (req, res) => {
  return res.redirect('/dist/pantallaPago.html');
});
router.post('/pantallaFinal', (req, res) => {
  return res.redirect('/dist/pantallaFinal.html');
});

// REDIRIGIR AL INDEX
router.post('/reindex', (req, res) => {

  return res.redirect('/dist/index.html');
  
});

// LOGIN
router.post('/login', (req, res) => {
    return res.redirect('/dist/main.html');
});

module.exports = router;
