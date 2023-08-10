const express = require('express');
const router = express.Router();
const AttendanceRecord = require('../models/attendanceRecord');

// Route to mark attendance
router.post('/api/attendance', async (req, res) => {
  const { employeeId, date } = req.body;

  try {
    // Check if an attendance record already exists for the given employee and date
    const existingRecord = await AttendanceRecord.findOne({ employeeId, date });
    if (existingRecord) {
      return res.status(400).json({ error: 'Attendance already marked for this date' });
    }

    // Create a new attendance record
    const newRecord = new AttendanceRecord({
      employeeId,
      date,
      status: 'Present', // You can modify this based on your requirements
    });

    // Save the record to the database
    await newRecord.save();

    res.json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all attendance records
router.get('/api/attendance', async (req, res) => {
  try {
    // Retrieve all attendance records from the database
    const attendanceRecords = await AttendanceRecord.find();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
