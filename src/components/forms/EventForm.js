import React from 'react';
import { useEventForm } from '../../hooks/forms/useEventForm';
import { useSelector } from 'react-redux';
import { toGetEvent } from '../../selectors/useSelectors';
import { Event } from '../profile/Event';

export const EventForm = () => {
  const { title, setTitle, date, setDate, success, handleSubmit, getNow } = useEventForm();

  return success ? (
    <div>
      <p>Success!</p>
      <Event />
    </div>
  ) : (
    <section>
      <div>
        <label>Title:</label>
        <input required
          type="text"
          value={title} 
          onChange={({ target }) => setTitle(target.value)} />

        <label>Date:</label>
        <input type="date"
          min={getNow()}
          value={date} 
          onChange={({ target }) => setDate(target.value)} />

        <button onClick={handleSubmit}>Set Event</button>
      </div>
    </section>
  );
};
