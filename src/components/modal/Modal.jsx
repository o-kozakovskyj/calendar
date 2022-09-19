import React from 'react';
import './modal.scss';
import { useState } from 'react';
import moment from 'moment/moment';


const Modal = ({ setIsShowModal, addEvent, dateTo, dateFrom })=> {
  const [formDat, setFormDat] = useState({
    title: "",
    description: "",
    date: dateFrom.split('T')[0],
    startTime: dateFrom.split('T')[1],
    endTime: dateTo.split('T')[1],
  });

  const handleSubmit = () => {
    addEvent({
      title: formDat.title,
      description: formDat.description,
      dateFrom: moment(formDat.date + ' ' + formDat.startTime),
      dateTo: moment(formDat.date + ' ' + formDat.endTime),
    })
  };
  const handleInputListener = (e) => {
    setFormDat({ ...formDat, [e.target.name]: e.target.value })
  }
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
                value={formDat.title}
                onChange={handleInputListener}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  value={formDat.date}
                  className="event-form__field"
                  onChange={handleInputListener} />
                <input
                  type="time"
                  name="startTime"
                  value={formDat.startTime}
                  className="event-form__field"
                  onChange={handleInputListener}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  value={formDat.endTime}
                  className="event-form__field"
                  onChange={handleInputListener}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={formDat.description}
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
  }

export default Modal;
