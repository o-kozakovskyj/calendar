import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
const App = () => {
  const [weekStartDate] = useState(new Date())
  const [date, setDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(date));
  console.log(date);
  return (
    <>
      
      <Header
        date={date}
        setDate={setDate}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
