import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        const response = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Signup successful! Please log in.");
            navigate("/login");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}

export default Signup;
