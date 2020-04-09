import { useSelector, useDispatch } from 'react-redux';
import { toGetEvent } from '../selectors/useSelectors';
import { useState, useEffect } from 'react';
import { fetchGetEvent } from '../actions/eventActions';

export const useEvent = () => {
  const dispatch = useDispatch();
  const { event, error, loading } = useSelector(toGetEvent);

  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [weekday, setWeekday] = useState();
  const [showEventForm, setShowEventForm] = useState(false);

  const monthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {dispatch(fetchGetEvent());}, []);

  useEffect(() => {
    if(event) {
      const { day, month, weekday } = getMmDd(event.date);
      setDay(day);
      setMonth(month);
      setWeekday(weekday);
    }
  }, [event]);

  const getMmDd = (date) => {
    const formattedDate =  new Date(date);
    const weekday = weekdaysArray[formattedDate.getDay()];
    const month = monthArray[formattedDate.getMonth()];
    const day = formattedDate.getDate();
    return { day, month, weekday };
  };

  return { event, day, month, weekday, showEventForm, setShowEventForm, error, loading };
};
