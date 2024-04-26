const mongoose = require("mongoose");
const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/measures";

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.info(`App connected successfully to the DB`);
  })
  .catch((error) => {
    console.error(`An error occurred while trying to connect to DB ${error}`);
  });


  process.on("SIGINT", function () {
    mongoose.connection.on("close", function () {
      console.info(`Mongoose disconnected on app termination`);
      process.exit(0);
    });
  });