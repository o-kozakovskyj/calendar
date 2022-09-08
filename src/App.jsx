import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';

import './common.scss';
const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getMonthName(weekDates);
  return (
    <>
      
      <Header
        date={weekStartDate}
        setWeekStartDate={setWeekStartDate}
        month = {month}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
