const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    author: String,
    content: String,
    publishedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
