import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import eventsList from './gateway/events.js';
import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {

  const [events, setEvents] = useState(eventsList);
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getMonthName(weekDates);

  const addEvent = (formDat) => {
   
    setEvents([...eventsList, formDat]);
  } 
  const deleteEvent = (id) => {
    setEvents(eventsList.filter(event => event.id !==id))
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
        event={events}
        addEvent={addEvent}
        deleteEvent={deleteEvent}
      />
      {modalWindow}
    </>
  );
};

export default App;
