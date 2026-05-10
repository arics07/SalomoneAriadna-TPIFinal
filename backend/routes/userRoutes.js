const express = require('express');
const rateLimit = require("express-rate-limit");
const userController = require("../controllers/userController");

//Creo un enrutador
const router = express.Router();

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5,
    message: "Demasiados intentos de login. Intenta más tarde."
});

//RUTAS
//POST /users/register: Registra usuarios con contraseñas hasheadas.
router.post('/register', userController.registerUser);

//POST /users/login: Devuelve un token de autenticación al iniciar sesión correctamente.
router.post('/login', loginLimiter, userController.loginUser);

module.exports = router;