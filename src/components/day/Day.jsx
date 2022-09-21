import React from 'react';
import Hour from '../hour/Hour';
import moment from 'moment/moment';
import { PropTypes } from 'prop-types';
import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEvent, handleModalSwitch }) => {
  const handleModalWithData = (event) => {
    
    const choosenDate = new Date(dataDay.setHours(event.target.dataset.time));
    const dateFrom = moment(choosenDate).format('YYYY-MM-DD[T]HH:mm');
    const dateTo = moment(choosenDate).add(1, 'hours').format('YYYY-MM-DD[T]HH:mm');
    
    handleModalSwitch(dateFrom, dateTo);
  }
  const hours = Array(24)
    .fill()
    .map((val, index) => index);
  return (
    <div className="calendar__day" data-day={dataDay} onClick={handleModalWithData}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        
        const hourEvents = dayEvents.filter(
          (event) =>new Date(event.dateFrom).getHours() === hour
        );

        return (
          <Hour
            key={dataDay.getDate() + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
            dataDay={dataDay}
          />
        );
      })}
    </div>
  );
};
Day.propTypes = {
  handleModalSwitch: PropTypes.func,
  deleteEvent: PropTypes.func,
  dataDay: PropTypes.instanceOf(Date).isRequired,
  dayEvents: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
}
Day.defaultProps = {
  dayEvents:[],
}
export default Day;
