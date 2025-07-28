const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });

const serviceRoutes = require("./routes/serviceRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();
app.use(express.json());

app.use("/api/v1/services", serviceRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/enquiry", enquiryRoutes);
const cors = require("cors");
app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("MongoDB Connected");
//     app.listen(process.env.PORT || 5000, () => {
//       console.log("Server running...");
//     });
//   })
//   .catch((err) => console.error("DB error:", err.message));

module.exports = app;
