import React from 'react';

const SalarySlip = ({ employeeName, month, year, salaryDetails }) => {
  return (
    <div className="salary-slip">
      <h2>Salary Slip for {month}, {year}</h2>
      <p>Employee: {employeeName}</p>
      {/* Display salary details */}
      <table>
        <thead>
          <tr>
            <th>Earnings</th>
            <th>Deductions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{salaryDetails.earnings}</td>
            <td>{salaryDetails.deductions}</td>
          </tr>
        </tbody>
      </table>
      {/* Additional details */}
    </div>
  );
};

export default SalarySlip;
