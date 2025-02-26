import React, { useState } from "react";

function MeetingForm({ setMeetings }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleAddMeeting = () => {
        if (!title || !date || !time) {
            alert("Please fill out all fields.");
            return;
        }

        const newMeeting = { title, date, time, done: false };
        const storedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
        const updatedMeetings = [...storedMeetings, newMeeting];

        localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
        setMeetings(updatedMeetings);
        
        setTitle("");
        setDate("");
        setTime("");
    };

    return (
        <div>
            <h3>Schedule a Meeting</h3>
            <input placeholder="Meeting Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            <button onClick={handleAddMeeting}>Add Meeting</button>
        </div>
    );
}

export default MeetingForm;
