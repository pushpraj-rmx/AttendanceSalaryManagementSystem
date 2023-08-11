import React from "react";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Perform any necessary cleanup or API calls for logout here
    // Call the provided onLogout function to update the parent component's state
    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
