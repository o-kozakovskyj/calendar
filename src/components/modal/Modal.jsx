import React from 'react';
import './modal.scss';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment/moment';
import { createEvent, fetchEventsList } from '../../gateway/events';

const Modal = ({ setIsShowModal, dateTo, dateFrom }) => {
  const [formData, setformData] = useState({
    title: "",
    description: "",
    date: dateFrom.split('T')[0],
    startTime: dateFrom.split('T')[1],
    endTime: dateTo.split('T')[1],
  });
 
  const handleSubmit = () => {
    const newEvent = {
      title: formData.title,
      description: formData.description,
      dateFrom: moment(formData.date + ' ' + formData.startTime),
      dateTo: moment(formData.date + ' ' + formData.endTime),
    };
    
    createEvent(newEvent);
  };
  
  const handleInputListener = (e) => {
    const { name, value } = e.target;
    if (name === "endTime" && (moment.duration(value).asHours() - moment.duration(formData.startTime).asHours()) > 6) {
      alert('You can`t create event longer then 6 hours')
      return
    }
    if (name === "startTime" && (moment.duration(formData.endTime).asHours() - moment.duration(value).asHours()) > 6) {
      alert('You can`t create event longer then 6 hours')
      return
    }
    setformData({ ...formData, [name]: value })
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => setIsShowModal(false)}>+</button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={formData.title}
              onChange={handleInputListener}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                value={formData.date}
                className="event-form__field"
                onChange={handleInputListener} />
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                className="event-form__field"
                onChange={handleInputListener}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                className="event-form__field"
                onChange={handleInputListener}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={formData.description}
              onChange={handleInputListener}
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
  dateTo: PropTypes.string ,
  dateFrom: PropTypes.string,
}
Modal.defaultProps = {
  dateTo: moment(new Date()).format('YYYY-MM-DD[T]HH:mm'),
  dateFrom: moment(new Date()).format('YYYY-MM-DD[T]HH:mm'),
}
export default Modal;
