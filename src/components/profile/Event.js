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
    <div className={style.event}>
      <h3 className={style.title}>Update Event</h3>
      <p>Title: <br/>
        <input required
          type='text'
          maxLength='42'
          value={titleInput} 
          onChange={({ target }) => setTitle(target.value)} />
      </p>
      <p>Date: <br/>
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
    <div onClick={() => setShowEventForm(!showEventForm)}>
      <div className={style.event}>
        <h5>Looking forward to:</h5>
        <h3 className={style.title}>{event.title}</h3>
        <div className={style.eventDate}>
          <span className={style.weekday}>{weekday}</span>
          <span className={style.month}>{month}</span>
          <span className={style.day}>{day}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      {loading ? <img style={{ height: '125px', margin: '-25px 0px' }} src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" /> : render}
    </section>
  );
};
