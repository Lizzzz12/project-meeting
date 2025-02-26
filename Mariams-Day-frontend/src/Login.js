import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("user", username);
            navigate("/dashboard");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
}

export default Login;
