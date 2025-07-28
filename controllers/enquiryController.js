const Enquiry = require("../models/Enquiry");

exports.submitEnquiry = async (req, res) => {
  try {
    const { name, email, question } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      question,
    });

    res.status(201).json({
      status: "success",
      data: {
        enquiry,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort("-createdAt");
    res.status(200).json({
      status: "success",
      results: enquiries.length,
      data: {
        enquiries,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
