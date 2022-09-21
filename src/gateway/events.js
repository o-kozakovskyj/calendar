const baseUrl = 'https://63065f06c0d0f2b8011beb27.mockapi.io/api/v1/events';

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Internal Server Error. Can't display events`)
    })
    .then(tasksList => {
      return tasksList;
    });
};

export const createEvent = eventData => {

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to create event')
    }
  });
};

export const deleteEvent = eventId => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to delete event');
    }
  });
};
