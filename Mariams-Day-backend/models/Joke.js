const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Joke", jokeSchema);
