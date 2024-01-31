// EventList.jsx

import React, { useState } from 'react';
import '../assets/css/addevents.css';
const EventList = () => {
  const [events, setEvents] = useState([
    {
      eventId: 1,
      eventType: 'Birthday Party',
      description: 'Celebrate John\'s birthday',
      charges: 20,
      participantsCount: 10,
      image: '../assets/images/Birthday-Cake-with-candles.jpg', // Add image path or URL
    },
    {
      eventId: 2,
      eventType: 'Wedding',
      description: 'Jane and Mark\'s wedding celebration',
      charges: 50,
      participantsCount: 50,
      image: 'wedding_image.jpg', // Add image path or URL
    },
  ]);

  return (
    <div>
      <h1>Party Events</h1>
      {events.map(event => (
        <div key={event.eventId} className="event-card">
          <img src={event.image} alt={event.eventType} className="event-image" />
          <div className="event-details" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{event.eventType}</h3>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Charges:</strong> ${event.charges}</p>
            <p><strong>Participants Count:</strong> {event.participantsCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
