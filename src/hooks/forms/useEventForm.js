import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchPatchEvent, SET_EVENT_ERROR, setEventError } from '../../actions/eventActions';

export const useEventForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(getNow());
  const [success, setSuccess] = useState(false);
  
  function getNow() {
    const now = new Date;
    const year = now.getFullYear();
    const month = now.getMonth() < 10 ?  `0${now.getMonth() + 1}` : now.getMonth() + 1;
    const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();

    return `${year}-${month}-${day}`;
  }

  const handleSubmit = () => {
    if(!title || !date) {
      dispatch(setEventError({
        message: 'All fields must be filled out',
        status: 400
      }));
      return Promise.resolve(false);
    } else { 
      return dispatch(fetchPatchEvent({ title, date: new Date(date + 'T12:00:00Z') }))
        .then(res => {
          if(res.type === SET_EVENT_ERROR) {
            throw new Error(res.payload.message);
          } else {
            setTitle('');
            setDate('');
            setSuccess(true);
            return true;
          }
        });
    }
  };

  return { title, setTitle, date, setDate, success, setSuccess, handleSubmit };
};
