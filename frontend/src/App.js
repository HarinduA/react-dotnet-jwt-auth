import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import LoginForm from './LoginForm'; // Your LoginForm component
import Dashboard from './Dashboard'; // Your Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Login form route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
};

export default App;
