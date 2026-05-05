//Importamos el módulo mongoose, permite interactuar con MongoDB de forma más sencilla
const mongoose = require('mongoose');

//Importamos el módulo dotenv para leer las variablaes de entorno
require('dotenv').config();

//Definimos una función asíncrona que se encarga de conectar la app con mongodb
const connectDB = async () => {

    //intentamos establecer la conexión a la BD
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //Si la conexión es exitosa, mostramos un mensaje
        console.log("Conectado a MongoDB.")
    } catch (error) {
        //Si ocurre un error, lo capturamos y lo mostramos en pantalla
        console.error("Error de conexión a MongoDB: ", error);
        //Terminamos el proceso de node.js con un código de error
        process.exit(1);
    }
};

//Exportamos la función para poder usarla en otros archivos de la app
module.exports = connectDB;