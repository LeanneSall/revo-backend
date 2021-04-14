const mongoose = require("mongoose");
const config = require("config");
const db = config.get("MONGO_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MONGODB Connected");
  } catch (error) {
    console.error(error.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
