import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, deleteEvent, dataDay, dayEvents }) => {
 
  const [current, updateCurrent] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCurrent(new Date())
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const currentTime =
    <div className="current-time" style={{ marginTop: current.getMinutes() }}>
      <div className="current-time__point" ></div>
      <div className="current-time__line" ></div>
    </div>  
  
  return (
    <div className="calendar__time-slot" data-time={dataHour}>
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;
        return (    
          <Event
            key={id}
            id={id}
            startTime={dateFrom}
            endTime={dateTo}
            height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            deleteEvent={deleteEvent}
          />
        );
      })}
      {moment(current).format("YY/M/DD/HH") === moment(dataDay).set('hour', dataHour).format("YY/M/DD/HH") && currentTime}
    </div>
  );
};

export default Hour;
