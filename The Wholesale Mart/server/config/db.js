const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB is connected.....".cyan.underline.bold);
};

module.exports = connectDB;
