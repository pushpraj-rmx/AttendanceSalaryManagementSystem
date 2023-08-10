import React, { useState, useEffect } from 'react';

export default function EmployeeDirectory() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from the API
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => {
        // Update the employees state with the fetched data
        setEmployees(data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Employee Directory</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>{employee.name} - {employee.position}</li>
        ))}
      </ul>
    </div>
  );
}
