const Enquiry = require("../models/Enquiry");

exports.submitEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
