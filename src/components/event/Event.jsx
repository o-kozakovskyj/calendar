import React from 'react';
import { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, events, deleteEvent }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [isShowDelBtn, setIsShowDelBtn] = useState(false);

  const handleSwitchEvents = (event) => {
    event.stopPropagation();
    if (event.target.className === "event") {
      setIsShowDelBtn(!isShowDelBtn)
    }
    if (event.target.className === "delete-event-btn") {
      deleteEvent(id);
      setIsShowDelBtn(!isShowDelBtn)
    }
  };
  
  const delBtn = isShowDelBtn === true
    ? <button className="delete-event-btn">
        <i className="far fa-trash-alt delete-event-btn__icon"></i>
        Delete
      </button>
    : null;
  return (
      <div style={eventStyle} className="event" onClick={handleSwitchEvents}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {delBtn}
      </div>
  );
};

export default Event;
