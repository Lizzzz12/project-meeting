const express = require("express");
// const {
//   getMeetings,
//   createMeeting,
//   updateMeeting,
//   deleteMeeting,
// } = require("../controllers/meetingController");

const router = express.Router();
const {
  getMeetings,
  addMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");

router.get("/meetings", getMeetings); // Get all meetings
router.post("/meetings", addMeeting); // Change createMeeting to addMeeting
router.put("/meetings/:id", updateMeeting); // Update a meeting
router.delete("/meetings/:id", deleteMeeting); // Delete a meeting

module.exports = router;
