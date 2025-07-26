const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    question: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
