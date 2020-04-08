import React, { useEffect } from 'react';
import { useEventForm } from '../../hooks/forms/useEventForm';
import { useEvent } from '../../hooks/useEvent';
import style from '../Styles/Profile.css';

export const Event = () => {
  const  { event, day, month, weekday, showEventForm, setShowEventForm, error, loading } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit, success, getNow } = useEventForm();

  useEffect(() => {
    setShowEventForm(false);
  }, [success]);

  const render = showEventForm || !event ? (
    <div>
      <p>
        <input type="date" 
          min={getNow()}
          value={dateInput} 
          onChange={({ target }) => setDate(target.value.slice(0, 10))} />
      </p>
      <p>
        <input required
          type="text"
          value={titleInput} 
          onChange={({ target }) => setTitle(target.value)} />
      </p>
      {error ? <p>{error.message}</p> : <></>}
      <div>
        <button onClick={() => {
          handleSubmit()
            .then(success => setShowEventForm(!success));
        }}>Update</button>
        <button onClick={() => setShowEventForm(!showEventForm)}>Cancel</button>
      </div>
    </div>
  ) : (
    <div>
      <p className={style.eventDate}>
        <em>{weekday}</em>
        <strong>{month}</strong>
        <span>{day}</span>
      </p>
      <p className={style.eventTitle}>{event.title}</p>
      <button onClick={() => setShowEventForm(!showEventForm)}>Edit</button>
    </div>
  );

  return (
    <section className={style.feature}>
      <h3>Looking Forward</h3>
      {loading ? <img style={{ height: '125px', margin: '-25px 0px' }} src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" /> : <></>}
      {render}
    </section>
  );
};
