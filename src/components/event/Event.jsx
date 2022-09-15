import React from 'react';
import { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleDelete = (event) => {
    setIsShowPopup(true)
  };
  const popup = isShowPopup === true ? <button className="delete-event-btn">
    <i class="far fa-trash-alt"></i>
    Delete event
  </button> : null;
  return (
    <>
      <div style={eventStyle} className="event" onClick={handleDelete}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {popup}
    </>
    
  );
};

export default Event;
