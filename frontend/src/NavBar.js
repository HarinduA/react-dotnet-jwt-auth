import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  return (
    <nav style={styles.nav}>
      {/* Logo Section */}
      <div style={styles.logo}>
        <h2 style={{ color: 'white' }}>{role === 'admin' ? 'Admin' : 'User'}</h2>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navList}>
        <li><Link style={styles.link} to="/dashboard">Dashboard</Link></li>
        <li><Link style={styles.link} to="/profile">Profile</Link></li>

        {/* Admin Only Links */}
        {role === 'admin' && (
          <>
            <li><Link style={styles.link} to="/analyze">Analyze</Link></li>
            <li><Link style={styles.link} to="/notifications">Notifications</Link></li>
          </>
        )}

        {/* Common Link */}
        <li><Link style={styles.link} to="/settings">Settings</Link></li>
      </ul>

      {/* Profile Section */}
      <div style={styles.profileSection}>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          style={styles.profileImage}
        />
        <p style={styles.profileName}>{role === 'admin' ? 'Admin' : 'User'}</p>
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '200px',
    backgroundColor: '#343a40',
    padding: '20px 10px',
    boxShadow: '2px 0 15px rgba(0,0,0,0.1)',
  },
  logo: {
    marginBottom: '30px',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    display: 'block',
    color: '#fff',
    padding: '12px 16px',
    textDecoration: 'none',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: 'background 0.3s',
  },
  profileSection: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginBottom: '8px',
  },
  profileName: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default Navbar;
