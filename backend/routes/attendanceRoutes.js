// attendanceRoutes.js

const express = require("express");
const Attendance = require("../models/attendanceModel"); // Import the Attendance model
const authMiddleware = require("../middleware/authMiddleware"); // Import your authentication middleware if needed

const router = express.Router();

// Route to mark attendance
router.post("http://localhost:5000/api/attendance/mark", authMiddleware, async (req, res) => {
  try {
    const { employeeId, date } = req.body;
    const newAttendance = new Attendance({
      employeeId,
      date,
      status: "Present", // Default status
    });

    await newAttendance.save();

    res.status(201).json({ message: "Attendance marked successfully" });
  } catch (error) {
    console.error("Error marking attendance:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
