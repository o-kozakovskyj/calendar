import React from 'react';
import { useState } from 'react';
import moment from 'moment/moment';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, startTime, deleteEvent, endTime, dayEvents }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [isShowDelBtn, setIsShowDelBtn] = useState(false);

  const handleSwitchEvents = (event) => {
    event.stopPropagation();
    const minutesToStart = 15;
    const timeFromEnd = new Date() - new Date(endTime);
    const timeToStart = moment.duration(new Date(startTime)).asMinutes()- moment.duration(new Date()).asMinutes();
    if (timeToStart < minutesToStart && timeFromEnd <= 0 ) {
      alert(`Can't delete an event before less than 15 minutes to start`)
      return
    }
    if (event.target.className === "event") {
      setIsShowDelBtn(!isShowDelBtn)
      return
    }
    if (event.target.className === "delete-event-btn" ) {
      deleteEvent(id);
      setIsShowDelBtn(!isShowDelBtn)
      return
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
