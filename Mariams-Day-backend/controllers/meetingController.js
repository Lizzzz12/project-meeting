const Meeting = require('../models/Meeting'); // Updated model name

// Get all meetings
const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find(); // Fetch all meetings
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new meeting
const addMeeting = async (req, res) => {
  const { title, date, time, description } = req.body;

  try {
    const newMeeting = new Meeting({ title, date, time, description });
    await newMeeting.save();
    res.status(201).json(newMeeting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a meeting
const updateMeeting = async (req, res) => {
  const { id } = req.params;
  const { title, date, time, description } = req.body;

  try {
    const meeting = await Meeting.findById(id);
    if (!meeting) return res.status(404).json({ message: "Meeting not found" });

    // Update meeting details
    meeting.title = title || meeting.title;
    meeting.date = date || meeting.date;
    meeting.time = time || meeting.time;
    meeting.description = description || meeting.description;

    await meeting.save();
    res.json(meeting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a meeting
const deleteMeeting = async (req, res) => {
  const { id } = req.params;

  try {
    const meeting = await Meeting.findByIdAndDelete(id);
    if (!meeting) return res.status(404).json({ message: "Meeting not found" });

    res.json({ message: "Meeting deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMeetings, addMeeting, updateMeeting, deleteMeeting };
