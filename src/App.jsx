import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getMonthName(weekDates);

  const [isshowModal, setIsShowModal] = useState(false)
  const modalWindow = isshowModal === true ? <Modal setIsShowModal={setIsShowModal} /> : null;
  return (
    <>
      
      <Header
        date={weekStartDate}
        setWeekStartDate={setWeekStartDate}
        month={month}
        setIsShowModal={setIsShowModal}
      />
      <Calendar weekDates={weekDates} />
      {modalWindow}
    </>
  );
};

export default App;
