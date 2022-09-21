import React from 'react';
import {PropTypes} from 'prop-types';
import { weekSlider} from '../../utils/dateUtils';
import './header.scss';
import moment from 'moment/moment';

const Header = ({ setWeekStartDate, date, month, handleModalSwitch }) => {
  const handleModalWithData = () => {
    const dateFrom = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
    const dateTo = dateFrom;
    handleModalSwitch(dateFrom, dateTo);
  };

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={handleModalWithData}>
        <i className="fas fa-plus create-event-btn__icon" ></i>Create
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

Header.propTypes = {
  setWeekStartDate: PropTypes.func,
  date: PropTypes.instanceOf(Date).isRequired,
  month: PropTypes.string.isRequired,
  handleModalSwitch: PropTypes.func,
};
Header.defaultProps = {
  date: moment(new Date()).startOf('isoweek'),
  month: '',
};
export default Header;
