const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Libreria para codificación de la información del usuario en la base de datos
// Otro comentario
let BicicletaSchema = new Schema(
  {
    
    color: { type: String, unique: false, lowercase: true, required: true },
    modelo: { type: String, unique: false, lowercase: true, required: true },
    latitud: { type: Number, unique: false,  required: true },
    longitud: { type: Number, unique: false,  required: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Bicicleta", BicicletaSchema);