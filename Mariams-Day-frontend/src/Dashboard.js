import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MeetingForm from "./MeetingForm";

function Dashboard() {
    const navigate = useNavigate();
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        const savedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
        setMeetings(savedMeetings);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const toggleMeetingStatus = (index) => {
        const updatedMeetings = [...meetings];
        updatedMeetings[index].done = !updatedMeetings[index].done;
        localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
        setMeetings(updatedMeetings);
    };

    const removeMeeting = (index) => {
        const updatedMeetings = meetings.filter((_, i) => i !== index);
        localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
        setMeetings(updatedMeetings);
    };

    return (
        <div className="container">
            <h2>Welcome to your Dashboard!</h2>
            
            <MeetingForm setMeetings={setMeetings} />

            <h3>Your Meetings</h3>
            <ul>
                {meetings
                    .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))
                    .map((meeting, index) => (
                        <li key={index} className={meeting.done ? "done" : ""}>
                            <div>
                                <strong>{meeting.title}</strong> - {meeting.date} at {meeting.time}
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    checked={meeting.done} 
                                    onChange={() => toggleMeetingStatus(index)} 
                                /> Done
                                <button className="remove-btn" onClick={() => removeMeeting(index)}>Remove</button>
                            </div>
                        </li>
                ))}
            </ul>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
