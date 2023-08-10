import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/attendance">Attendance</a></li>
        <li><a href="/salary">Salary</a></li>
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
};

export default Navbar;
