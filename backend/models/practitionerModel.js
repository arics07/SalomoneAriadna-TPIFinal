const mongoose = require("mongoose");

const PractitionerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String, // por ej: médico, nutricionista, fonoaudiólogo.
    enum: ["Lic. en Nutrición", "Lic. en Fonoaudiología", "Ginecología", "Dermatología", "Cirugía"],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Practitioner", PractitionerSchema);