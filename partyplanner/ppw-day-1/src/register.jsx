
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const Register = () => {
  return (
    <div className="mydiv">
    <div className="container-login">
      <div className="left-container">
        <div className="login-left-container">
          <div className="login-left-container-h2">
            <h2>Register</h2>
          </div>
          <div className="login-info">
            <input type="email" className="login-username-input" placeholder="Email" />
            <input type="password" className="login-email-input" placeholder="Password" />
            <button className="login-button"> <Link to={`/adminlogin`}>Register</Link></button>
          </div>
        </div>
      </div>
      <div id="signupForm" className="right-container signup-form">
        <div className="partyhub-info">
          <h2>PartyHub!</h2>
          <p>
            Revolutionizing event planning with a central hub for users to showcase services and clients to seamlessly book and manage events. A user-friendly experience enhancing event planning for both users and clients.
          </p>
        </div>
        <div className="partyhub-features">
          <ul>
            <li>Seamless Booking</li>
            <li>User-Friendly Experience</li>
            <li>Comprehensive Showcase</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
