import React, { useEffect, useState } from 'react';


import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, deleteEvent, dataDay }) => {
 
  const [current, updateCurrent] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCurrent(new Date())
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const currentTime = <div className="red-line" style={{ marginTop: current.getMinutes() }}></div>  
  
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;
       
        return (
          
          <Event
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            deleteEvent={deleteEvent}
          />
        );
      })}
      {current.getDate() === dataDay && current.getHours() ===dataHour && currentTime}
    </div>
  );
};

export default Hour;
