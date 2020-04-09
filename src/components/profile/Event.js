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
      <p>Name of Event: 
        <input required
          type="text"
          value={titleInput} 
          onChange={({ target }) => setTitle(target.value)} />
      </p>
      <p>Date: 
        <input type="date" 
          min={getNow()}
          value={dateInput} 
          onChange={({ target }) => setDate(target.value.slice(0, 10))} />
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
      <div className={style.event}>
        <h3 className={style.eventTitle}>{event.title}</h3>
        <div className={style.eventDate}>
          <span className={style.weekday}>{weekday}</span>
          <span className={style.month}>{month}</span>
          <span className={style.day}>{day}</span>
        </div>
      </div>
      <button onClick={() => setShowEventForm(!showEventForm)}>Edit</button>
    </div>
  );

  return (
    <section>
      {loading ? <img style={{ height: '125px', margin: '-25px 0px' }} src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" /> : <></>}
      {render}
    </section>
  );
};
