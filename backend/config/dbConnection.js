require("dotenv").config(); // Add this line
const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "blog_app01",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(
        `Some error occurred while connecting to the database: ${err}`
      );
    });
};

module.exports = dbConnection;
