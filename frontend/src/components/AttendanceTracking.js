import React, { useState, useEffect } from 'react';

const AttendanceTracking = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    // Fetch attendance records from the backend and update attendanceRecords state
    // Implement this fetch logic
  }, []);

  const handleMarkAttendance = async () => {
    try {
      // Send attendance data to the backend
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId, date }),
      });

      if (response.ok) {
        // Update attendanceRecords state with the new record
        setAttendanceRecords([
          ...attendanceRecords,
          { employeeId, date, status: 'Present' },
        ]);

        // Clear form inputs
        setEmployeeId('');
        setDate('');
      } else {
        // Handle error cases
      }
    } catch (error) {
      // Handle error cases
    }
  };

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
  };

  // Map through attendanceRecords and display in rows
  const attendanceRows = attendanceRecords.map((record, index) => (
    <tr key={index} onClick={() => handleRecordClick(record)}>
      <td>{record.employeeId}</td>
      <td>{record.date}</td>
      <td>{record.status}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Attendance Tracking</h1>
      <form>
        {/* Select employee */}
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        {/* Date picker */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="button" onClick={handleMarkAttendance}>
          Mark Attendance
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{attendanceRows}</tbody>
      </table>

      {selectedRecord && (
        <div>
          <h2>Attendance Details</h2>
          <p>Employee ID: {selectedRecord.employeeId}</p>
          <p>Date: {selectedRecord.date}</p>
          <p>Status: {selectedRecord.status}</p>
          {/* Add more detailed information here */}
        </div>
      )}
    </div>
  );
};

export default AttendanceTracking;
