import React, { useEffect, useState } from "react";
import Navbar from './NavBar'; // Import Navbar

const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    } else {
      setRole("guest"); // Set default role if no role is found
    }
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Navbar /> {/* Render Navbar */}
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <h1>Welcome {role === "admin" ? "Admin" : "Employee"}</h1>
        {/* Show content based on role */}
        {role === "admin" ? (
          <div>
            <h2>Admin Content</h2>
            {/* Admin-specific content goes here */}
          </div>
        ) : role === "employee" ? (
          <div>
            <h2>Employee Content</h2>
            {/* Employee-specific content goes here */}
          </div>
        ) : (
          <div>
            <h2>Guest Content</h2>
            {/* Fallback content for users without a role */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
