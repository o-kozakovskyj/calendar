import React from 'react';
import { weekSlider} from '../../utils/dateUtils';
import './header.scss';

const Header = ({ setWeekStartDate, date, month }) => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => setWeekStartDate(new Date())}>Today</button>
        <button className="icon-button navigation__nav-icon" onClick={() => setWeekStartDate(weekSlider(date,'<'))}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => setWeekStartDate(weekSlider(date, '>'))}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

export default Header;
