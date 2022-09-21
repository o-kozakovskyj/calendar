import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment, { weekdays } from 'moment/moment.js';
import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getMonthName(weekDates);

  const [isShowModal, setIsShowModal] = useState(false);
  const [dateInPicker, setDateInPicker] = useState({
    startDate: moment(new Date()).format('YYYY-MM-DD[T]HH:mm'),
    finishDate: moment(new Date()).format('YYYY-MM-DD[T]HH:mm'),
  })
  const handleModalSwitch = (start, finish) => {
    setDateInPicker({
      startDate: start,
      finishDate: finish,
   })
    setIsShowModal(true)
  }
  const modalWindow = isShowModal === true
    ? <Modal
      setIsShowModal={setIsShowModal}
      dateFrom={dateInPicker.startDate}
      dateTo={dateInPicker.finishDate}
    />
    : null;
  return (
    <>
      <Header
        date={weekStartDate}
        setWeekStartDate={setWeekStartDate}
        month={month}
        handleModalSwitch={handleModalSwitch}
      />
      <Calendar
        weekDates={weekDates}
        handleModalSwitch={handleModalSwitch}
      />
      {modalWindow}
    </>
  );
};

export default App;
