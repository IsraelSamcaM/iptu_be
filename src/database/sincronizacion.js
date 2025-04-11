import { sequelize } from "./database.js";

import '../models/Usuario.js'
import '../models/Carrera.js'
import '../models/Solicitante.js'
import '../models/Problematica.js'
import '../models/Auxiliar.js'
import '../models/Publicacion.js'

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true }); // { force: true } si quieres forzar
        console.log("✅ Base de datos sincronizada correctamente.");
    } catch (error) {
        console.error("❌ Error al sincronizar la base de datos:", error);
    } finally {
        process.exit(); 
    }
}

syncDatabase();