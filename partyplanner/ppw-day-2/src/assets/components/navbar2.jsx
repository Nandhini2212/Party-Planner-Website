import React from 'react';
import '../assets/css/navbar2.css'

const BigNavbar = () => {
  return (
    <nav className="partyhub-navbar">
      <div className="partyhub-navbar-left">
        <span className="partyhub-navbar-item">About Us</span>
        <span className="partyhub-navbar-item">Login</span>
      </div>
      <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
      {/* <h1 className="partyhub-navbar-title">Party Hub</h1> */}
      <div className="partyhub-navbar-right">
        <span className="partyhub-navbar-item">Login as Admin</span>
      </div>
    </nav>
  );
}

export default BigNavbar;
