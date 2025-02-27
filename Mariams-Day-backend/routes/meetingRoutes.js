const express = require("express");
const {
  getMeetings,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");

const router = express.Router();

router.get("/meetings", getMeetings); // Get all meetings
router.post("/meetings", createMeeting); // Create a new meeting
router.put("/meetings/:id", updateMeeting); // Update a meeting
router.delete("/meetings/:id", deleteMeeting); // Delete a meeting

module.exports = router;
