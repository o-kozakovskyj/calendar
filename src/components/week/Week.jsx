import React from 'react';
import Day from '../day/Day';
import { PropTypes } from 'prop-types';
import './week.scss';

const Week = ({ weekDates, events, deleteEvent, handleModalSwitch }) => {
  
  const weekmap =
    weekDates.map((dayStart) => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
      //getting all events from the day we will render
      const dayEvents = events.filter(
        event => Date.parse(event.dateFrom) > Date.parse(dayStart) && Date.parse(event.dateTo) < dayEnd
      );
      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart}
          dayEvents={dayEvents}
          deleteEvent={deleteEvent}
          handleModalSwitch={handleModalSwitch}
        />
      );
    });
  
  return (
    <div className="calendar__week" >
      {weekmap}
    </div>
  );
};
Week.propTypes = {
  handleModalSwitch: PropTypes.func,
  deleteEvent: PropTypes.func,
  weekDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  events: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
}
Week.defaultProps = {
  weekDates: [],
  events: [],
}
export default Week;