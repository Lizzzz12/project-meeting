const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let users = {}; // Temporary in-memory storage (not for production!)

app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).json({ message: "User already exists!" });
    }
    users[username] = password;
    res.json({ message: "Signup successful!" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.json({ message: "Login successful!" });
    } else {
        res.status(401).json({ message: "Invalid credentials!" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
