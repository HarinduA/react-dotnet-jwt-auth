// src/components/Header.js
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={headerStyle}>
      {/* Search Bar */}
      <div style={searchContainer}>
        <input type="text" placeholder="Search..." style={searchInput} />
      </div>

      {/* Right side icons */}
      <div style={rightIconsStyle}>
        <FaBell style={iconStyle} title="Notifications" />
        <FaUserCircle style={iconStyle} title="Profile" />
      </div>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#ffffff',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 30px',
  height: '70px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const searchContainer = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
};

const searchInput = {
  width: '60%',
  maxWidth: '400px',
  padding: '10px 15px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const rightIconsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const iconStyle = {
  fontSize: '20px',
  cursor: 'pointer',
  color: '#333',
};

export default Header;
