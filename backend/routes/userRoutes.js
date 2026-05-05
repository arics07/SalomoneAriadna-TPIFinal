const express = require('express');
const userController = require("../controllers/userController");

// Creo un enrutador
const router = express.Router();

// RUTAS
//POST /users/register: Registra usuarios con contraseñas hasheadas.
router.post('/register', userController.registerUser);

//POST /users/login: Devuelve un token de autenticación al iniciar sesión correctamente.
router.post('/login', userController.loginUser);

module.exports = router;