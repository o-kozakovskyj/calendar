import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment/moment';
import './event.scss';

const Event = ({ title, time, id, startTime, deleteEvent, endTime }) => {

  const eventStyle = {
    height: (new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60),
    marginTop: new Date(startTime).getMinutes(),
  };
  const [isShowDelBtn, setIsShowDelBtn] = useState(false);

  const handleSwitchEvents = (event) => {
    event.stopPropagation();
    const minutesToStart = 15;
    const timeFromEnd = new Date() - new Date(endTime);
    const timeToStart = moment.duration(new Date(startTime)).asMinutes() - moment.duration(new Date()).asMinutes();
    if (timeToStart < minutesToStart && timeFromEnd <= 0) {
      alert(`Can't delete an event before less than 15 minutes to start`)
      return
    }
    if (event.target.className === "event") {
      setIsShowDelBtn(!isShowDelBtn)
      return
    }
    if (event.target.className === "delete-event-btn") {
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
Event.propTypes = {
  id: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  deleteEvent: PropTypes.func,

}
Event.defaultProps = {
  title: '',
}
export default Event;
