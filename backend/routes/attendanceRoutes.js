const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendanceModel'); // Import the Attendance model
const authMiddleware = require('../middleware/authMiddleware'); // Import the authMiddleware

// Route to mark attendance
router.post('/api/attendance/mark', authMiddleware, async (req, res) => {
  try {
    const { employeeId, date } = req.body;
    const newAttendance = new Attendance({
      employeeId,
      date,
      status: 'Present',
    });

    await newAttendance.save();

    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    console.error('Error marking attendance:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
