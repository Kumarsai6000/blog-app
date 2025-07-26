const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};
