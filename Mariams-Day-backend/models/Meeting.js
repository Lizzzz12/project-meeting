const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true },  // Meeting title
  date: { type: Date, required: true },     // Meeting date
  time: { type: String, required: true },   // Time of the meeting (e.g., "14:00")
  description: { type: String },            // Optional description
  completed: { type: Boolean, default: false } // Track if meeting is done
});

module.exports = mongoose.model("Meeting", meetingSchema);
