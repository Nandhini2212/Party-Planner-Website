
import { Link } from "react-router-dom";
import "../assets/css/login.css"
import { useState } from "react";
// import React from 'react';
const Login =()=>{
    
    // const handleRegisterClick = () => {
    //     const signupForm = document.getElementById('signupForm');
    //     signupForm.classList.toggle('visible');
    //   };

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Perform login logic here
    // For now, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };
return (
    <div className="mydiv">
    <div className="container-login">

        
        <div className="left-container">
            <div className="login-left-container">
                <div className="login-left-container-h2">
                <h2>Login</h2>
                <p><Link to={`/adminlogin`}> Or Login as Admin</Link></p>
                </div>
                <div className="login-info">
                <input type ="email" className="login-username-input" placeholder="Email" value={email}
                onChange={handleEmailChange}></input>
                <input type ="password" className="login-email-input" placeholder="Password" value={password}
                onChange={handlePasswordChange}></input>
                <p>Don have an account? </p><Link to={`/register`} className="Register-link">Register</Link>
               
                <button className="login-button" onClick={handleLogin}><Link to={`/admindashboard`} style={{ color: '#ffffff' }} >Login</Link></button>
                </div>
            </div>


            


        </div>
        <div className="right-container">
            <div className="partyhub-info">
            <h2>PartyHub!</h2>
            <p>
            <p>
            Revolutionizing event planning with a central hub for users to showcase services and clients to seamlessly book and manage events. A user-friendly experience enhancing event planning for both users and clients.
          </p>
            </p>
            </div>
            <div className="partyhub-features">
            {/* <h3>Key Features:</h3> */}
            <ul>
                <li>Seamless Booking</li>
                <li>User-Friendly Experience</li>
                <li>Comprehensive Showcase</li>
               
                {/* Add more features as needed */}
            </ul>
            </div>
        </div>
    </div>
    </div>
)
}
export default Login