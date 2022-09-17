import React, { useState,useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { createEvent, fetchEventsList, deleteEvent } from './gateway/events.js';
import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [events, setEvents] = useState([]);
 const fetchEvents = () => {
   fetchEventsList()
     .then(eventsList => setEvents(eventsList))
     .catch(error=> alert(error))
  };
  useEffect(() => fetchEvents(),[]);

  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getMonthName(weekDates);

  const addEvent = (formDat) => {
    createEvent(formDat).then(() => fetchEvents())
  };

  const delEvent = (id) => {
    deleteEvent(id).then(() => fetchEvents())
  }

  const [isshowModal, setIsShowModal] = useState(false)
  const modalWindow = isshowModal === true
    ? <Modal
      setIsShowModal={setIsShowModal}
      addEvent={addEvent}
      events={events}
    />
    : null;
  
  return (
    <>
      <Header
        date={weekStartDate}
        setWeekStartDate={setWeekStartDate}
        month={month}
        setIsShowModal={setIsShowModal}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        addEvent={addEvent}
        deleteEvent={delEvent}
      />
      {modalWindow}
    </>
  );
};

export default App;
