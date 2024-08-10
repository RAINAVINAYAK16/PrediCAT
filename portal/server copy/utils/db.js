const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(0);
  }
};

module.exports = connectDb;
