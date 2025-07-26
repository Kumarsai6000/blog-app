const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    treatments: [String],
    doctorAssigned: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
