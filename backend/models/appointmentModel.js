const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  practitioner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Practitioner",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["confirmado", "en espera", "atendido", "cancelado"],
    default: "en espera"
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);