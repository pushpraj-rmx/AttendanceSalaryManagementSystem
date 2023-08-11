import React from 'react';

const AttendanceDetailsModal = ({ record, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Attendance Details</h2>
        <p><strong>Employee ID:</strong> {record.employeeId}</p>
        <p><strong>Date:</strong> {record.date}</p>
        <p><strong>Status:</strong> {record.status}</p>
        {/* You can display more information here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AttendanceDetailsModal;
