import React, { useEffect } from 'react';
import { useEventForm } from '../../hooks/forms/useEventForm';
import { useEvent } from '../../hooks/useEvent';
import style from '../Styles/Profile.css';

export const Event = () => {
  const  { event, date, showEventForm, setShowEventForm, error, loading } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit, success, getNow } = useEventForm();

  useEffect(() => {
    setShowEventForm(false);
  }, [success]);

  return (
    <section className={style.feature}>
      <h3>Looking Forward</h3>
      {loading ? <img style={{ height: '125px', margin: '-25px 0px' }} src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" /> : <></>}
      
      <p className={style.eventDate}>{showEventForm || !event ? <input type="date" 
        min={getNow()}
        value={dateInput} 
        onChange={({ target }) => setDate(target.value.slice(0, 10))} /> : date }</p>

      <p className={style.eventTitle}>{showEventForm || !event ? (<input required
        type="text"
        value={titleInput} 
        onChange={({ target }) => setTitle(target.value)} />) : event.title}</p>

      {error && showEventForm ? <p>{error.message}</p> : <></>}

      {showEventForm || !event ? (
        <div>
          <button onClick={() => {
            handleSubmit()
              .then(success => setShowEventForm(!success));
          }}>Update</button>
          <button onClick={() => setShowEventForm(!showEventForm)}>Cancel</button>
        </div>
      ) : (
        <div><button onClick={() => setShowEventForm(!showEventForm)}>Edit</button></div>
      )}

    </section>
  );
};
