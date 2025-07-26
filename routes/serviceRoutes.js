const express = require("express");
const {
  createService,
  getAllServices,
} = require("../controllers/serviceController");
const router = express.Router();

router.post("/add", createService);
router.get("/", getAllServices);

module.exports = router;
