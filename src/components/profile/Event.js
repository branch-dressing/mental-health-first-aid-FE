import React from 'react';
import { useEventForm } from '../../hooks/useEventForm';
import { useEvent } from '../../hooks/useEvent';

export const Event = () => {
  const  { event, date, showEventForm, setShowEventForm } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit } = useEventForm(event.title, event.date);

  const formattedDate = dateInput.slice(0, 10);

  return (
    <section>
      <h3>Looking Forward</h3>
      <p>You are looking forward to</p>
      <p>{!showEventForm ? event.title : (<input required
        type="text"
        value={titleInput} 
        onChange={({ target }) => setTitle(target.value)} />)}</p>
      <p>on {!showEventForm ? date : <input type="date" 
        value={formattedDate} 
        onChange={({ target }) => setDate(target.value)} />}</p>
      {!showEventForm ? (
        <div><button onClick={() => setShowEventForm(!showEventForm)}>Edit</button></div>
      ) : (
        <div>
          <button onClick={handleSubmit}>Update</button>
          <button onClick={() => setShowEventForm(!showEventForm)}>Cancel</button>
        </div>
      )}
    </section>
  );
};
