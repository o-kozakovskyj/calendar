import React from 'react';
import './modal.scss';
import { useState } from 'react';


const Modal = ({ setIsShowModal, events, addEvent })=> {
  const [formDat, setFormDat] = useState({
    title: "",
    dateFrom: new Date(),
    dateTo: new Date(),
    description: "",
    id: events.length + 1,
  });
  const handleClick = (event) => {
    event.preventDefault()
    addEvent({
      title: formDat.title,
      description: formDat.description,
      id: formDat.id,
      dateFrom: new Date(formDat.dateFrom),
      dateTo: new Date(formDat.dateTo)
    })
    setIsShowModal(false);
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
                onChange={(e) => setFormDat({ ...formDat, title: e.target.value })}
              />
              <div className="event-form__time">
                <input
                 type="datetime-local"
                  name="dateFrom"
                  className="event-form__field"
                  value={formDat.dateFrom}
                  onChange={(e) => setFormDat({ ...formDat, dateFrom: e.target.value })}
                />
                <span>-</span>
                <input
                  type="datetime-local"
                  name="dateTo"
                  className="event-form__field"
                  value={formDat.dateTo}
                  onChange={(e) => setFormDat({ ...formDat, dateTo: e.target.value })}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={formDat.description}
                onChange={(e) => setFormDat({ ...formDat, description: e.target.value })}
              ></textarea>
              <button
                type="submit"
                className="event-form__submit-btn"
                onClick={handleClick}
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
