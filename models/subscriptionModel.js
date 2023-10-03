const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  razorpay_signature: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_subscription_id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("subscriptions", subscriptionSchema);
