import React, { useState } from "react";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer";

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <Header loggedIn={loggedIn} handleLogout={handleLogout} /> {/* Include the Header component */}
      <h1>Dashboard</h1>
      <div className="widget">
        <h2>Employee Overview</h2>
        <p>Total Employees: 50</p>
        <p>Active Employees: 40</p>
        <p>Inactive Employees: 10</p>
      </div>
      <div className="widget">
        <h2>Attendance Summary</h2>
        <p>Today's Present: 30</p>
        <p>Today's Absent: 20</p>
      </div>
      <Footer />

    </div>
  );
};

export default Dashboard;
