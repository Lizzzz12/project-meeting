const Joke = require('../models/Joke');

// Get a random joke
const getJoke = async (req, res) => {
  try {
    const jokes = await Joke.find();
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Vote on a joke
const voteJoke = async (req, res) => {
  const { id } = req.params;
  const { emoji } = req.body;

  try {
    const joke = await Joke.findById(id);
    if (!joke) return res.status(404).json({ message: "Joke not found" });

    const voteIndex = joke.votes.findIndex(v => v.label === emoji);
    if (voteIndex !== -1) {
      joke.votes[voteIndex].value += 1;
    } else {
      joke.votes.push({ label: emoji, value: 1 });
    }

    await joke.save();
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getJoke, voteJoke };
