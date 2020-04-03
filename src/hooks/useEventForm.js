import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchPatchEvent, SET_EVENT_ERROR, setEventError } from '../actions/eventActions';

export const useEventForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if(!title || !date) return dispatch(setEventError({
      message: 'All fields must be filled out',
      status: 400
    }));
    else return dispatch(fetchPatchEvent({ title, date: new Date(date + 'T12:00:00Z') }))
      .then(res => {
        if(res.type === SET_EVENT_ERROR) throw new Error(res.payload.message);
        else setSuccess(true);
      });
  };

  return { title, setTitle, date, setDate, success, setSuccess, handleSubmit };
};
