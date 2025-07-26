const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running...");
    });
  })
  .catch((err) => console.error("DB error:", err.message));
