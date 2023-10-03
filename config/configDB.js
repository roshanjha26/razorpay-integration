const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Database connection error");
});
connection.on("connected", () => {
  console.log("Database connected with backend");
});

module.exports = connection;
