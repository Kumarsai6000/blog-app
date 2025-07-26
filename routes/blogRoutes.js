const express = require("express");
const { createBlog, getAllBlogs } = require("../controllers/blogController");
const router = express.Router();

router.route("/").post(createBlog).get(getAllBlogs);

module.exports = router;
