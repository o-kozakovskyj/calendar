import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      <span className='calendar__gmt'>GMT+02</span>
      {weekDates.map((dayDate) => {
        let dayNameStyle;
        let dayNumberStyle;
        const today = new Date();
        if (dayDate.getTime() === today.setHours(0, 0, 0, 0 )) {
          dayNameStyle = "day-label__day-name day-label__name-current";
          dayNumberStyle = "day-label__day-number day-label__number-current"
        } else {
          dayNameStyle = "day-label__day-name";
          dayNumberStyle = "day-label__day-number";
        }
        return (
          <div className="calendar__day-label day-label" key={dayDate}>
            <span className={dayNameStyle}>{days[dayDate.getDay()]}</span>
            <span className={dayNumberStyle}>{dayDate.getDate()}</span>
          </div>
        )
      }
      )}
    </header>
  );
};

export default Navigation;
