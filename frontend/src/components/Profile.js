import React, { useState, useEffect, useRef } from 'react';

const Profile = ({ userId, accessToken }) => {
  // State to store user profile data
  const [profileData, setProfileData] = useState({});
  const [updatedProfileData, setUpdatedProfileData] = useState({});

  // Create a ref to hold the fetchUserProfile function
  const fetchUserProfileRef = useRef();

  useEffect(() => {
    // Define the fetchUserProfile function
    fetchUserProfileRef.current = async () => {
      try {
        const response = await fetch(`/api/user/profile/${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          // Handle error cases
        }
      } catch (error) {
        // Handle error cases
      }
    };

    fetchUserProfileRef.current(); // Call the function
  }, [userId, accessToken]);

  // Function to handle profile update
  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`/api/user/profile/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedProfileData),
      });

      if (response.ok) {
        // Profile update successful
        // Fetch and update the profile data again to reflect the changes
        fetchUserProfileRef.current(); // Call the function
      } else {
        // Handle error cases
      }
    } catch (error) {
      // Handle error cases
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>My Profile</h1>
      {/* Display profile details */}
      <div>
        <h2>Personal Information</h2>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={updatedProfileData.firstName || profileData.firstName || ''}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other personal information fields */}
      </div>
      {/* Other profile sections */}
      {/* ... */}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;
