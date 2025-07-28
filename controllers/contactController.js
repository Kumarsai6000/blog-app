const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      status: "success",
      data: {
        contact,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort("-createdAt");
    res.status(200).json({
      status: "success",
      results: contacts.length,
      data: {
        contacts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
