const express = require("express");
const dotenv = require("dotenv").config();
const dbConfig = require("./config/configDB");
const Razorpay = require("razorpay");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// //razorpay instance
// exports.instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_API_SECRET,
// });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port :${port}`);
});
