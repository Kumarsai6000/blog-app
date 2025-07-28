const Service = require("../models/Service");

exports.createService = async (req, res) => {
  try {
    const { name, description, treatments, doctorAssigned } = req.body;

    const service = await Service.create({
      name,
      description,
      treatments,
      doctorAssigned,
    });

    res.status(201).json({
      status: "success",
      data: {
        service,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort("-createdAt");
    res.status(200).json({
      status: "success",
      results: services.length,
      data: {
        services,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return res.status(404).json({
        status: "fail",
        message: "No service found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        service,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        status: "fail",
        message: "No service found with that ID",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
