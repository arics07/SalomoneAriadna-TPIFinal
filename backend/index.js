// Importamos las dependencias
const express = require('express');
const connectDB = require('./config/database.js');
require('dotenv').config(); //carga las variables del archivo .env

const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");

const patientRoutes = require('./routes/patientRoutes.js');
const practitionerRoutes = require('./routes/practitionerRoutes.js');
const appointmentRoutes = require('./routes/appointmentRoutes.js');
const userRoutes = require('./routes/userRoutes.js')

//Creamos una instancia de express
const app = express();
const PORT = process.env.PORT || 3000;

//Lamamos a la conexión para la BD
connectDB();

//Definimos una ruta de prueba en la raiz que responde con un mensaje
app.get("/", (req, res) => {
  res.send("API funcionando.");
});

app.use(cors()); // Para que el front se pueda comunicar con el servidor
app.use(express.json()); // Para lectura de datos en formato JSON; siempre arriba de las rutas

// Para servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../public')));

// Rutas API
app.use('/api/patients', patientRoutes);
app.use('/api/practitioners', practitionerRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/users', userRoutes); //Para el registro y login de usuarios del sistema


// Ruta para manejar cualquier solicitud
app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

