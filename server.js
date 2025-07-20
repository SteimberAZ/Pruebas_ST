const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');


dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Servir archivos HTML (ej: login con Tailwind)
app.use('/dist', express.static('dist'));


// Conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Conectado a la base de datos MySQL');
});

// Hacer disponible la conexión
app.set('db', db);

// Rutas
app.use('/auth', authRoutes);

// Iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
});
