
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have React Router installed
import '../assets/css/admindashboard.css'; // Import the CSS file
import { useParams } from "react-router-dom";
const AdminNavbar = () => {
    // const { username } = useParams();
    // console.log(username)
    
  return (
    <div className="admin-navbar">
      <Link to={`/addevents`} className="add-events-link">Add Events</Link>
      <Link to={`/all-bookings`} className="all-bookings-link">All Bookings</Link>
      <Link to={`/all-event`} className="all-events-link">All Events</Link>
      <Link to={`/logout`} className="logout-btn">Logout</Link>
    </div>
  );
};

export default AdminNavbar;
