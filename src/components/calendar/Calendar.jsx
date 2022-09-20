import React, { useState, useEffect } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEventsList, deleteEvent } from '../../gateway/events.js';
import './calendar.scss';

const Calendar = ({ weekDates,handleModalSwitch }) => {
  const [events, setEvents] = useState([]);
  const fetchEvents = () => {
    fetchEventsList()
      .then(eventsList => setEvents(eventsList))
      .catch(error => alert(error))
  };
  const delEvent = (id) => {
    deleteEvent(id).then(() => fetchEvents())
  }
  useEffect(() => fetchEvents(), []);

    return (
      <section className="calendar" >
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={events}
              deleteEvent={delEvent}
              handleModalSwitch={handleModalSwitch}
            />
          </div>
        </div>
      </section>
    );
  }


export default Calendar;
