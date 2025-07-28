const express = require("express");
const enquiryController = require("../controllers/enquiryController");

const router = express.Router();

router
  .route("/")
  .post(enquiryController.submitEnquiry)
  .get(enquiryController.getAllEnquiries);

module.exports = router;
