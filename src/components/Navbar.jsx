import React from 'react';
import { Logout as LogoutIcon } from '@mui/icons-material';

const Navbar = () => {
  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="navbar">
      <div className="user-info">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Profile" 
          className="profile-pic"
        />
        <span className="username">Admin User</span>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        <LogoutIcon />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Navbar; 