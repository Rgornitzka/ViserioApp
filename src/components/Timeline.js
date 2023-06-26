// ./components/Timeline.js
import React from 'react';

const Timeline = ({events}) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>
          {event}
        </div>
      ))}
    </div>
  )
};