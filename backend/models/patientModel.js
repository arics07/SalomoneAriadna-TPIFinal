const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Patient", MemberSchema);