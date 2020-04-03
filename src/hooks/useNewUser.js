import React, { useState, useEffect } from 'react';
import { EventForm } from '../components/EventForm';
import { MoodForm } from '../components/MoodForm';
import { PositiveForm } from '../components/PositiveForm';
import { CopyLink } from '../components/CopyLink';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toGetEvent, toGetPositives, toGetMoods, toGetAuth } from '../selectors/useSelectors';
import { updateUser, setSession } from '../actions/authActions';

export const useNewUser = () => {
  const { loading: eventCreated } = useSelector(toGetEvent);
  const { loading: positiveCreated } = useSelector(toGetPositives);
  const { loading: moodCreated } = useSelector(toGetMoods);
  const { user } = useSelector(toGetAuth);
  const [currentRender, setCurrentRender] = useState((<></>));
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const friendCode = new URLSearchParams(location.search).get('friendcode');

  const slides = [
    { title: 'Hello!' },
    {
      title: 'Hello!',
      text: 'The goal of this app is to give you the tools to be in control of your mental health.'
    },
    {
      title: 'Hello!',
      text: 'You should be able to log on and find exactly what you neeed at that moment.'
    },
    {
      title: 'Hello!',
      text: 'Your kit is currently empty.'
    },
    {
      title: 'Hello!',
      text: 'Let’s start filling it!'
    },
    { title: 'Looking Forward' },
    {
      title: 'Looking Forward',
      text: 'Feelings won’t last forever, they come and go in waves.'
    },
    {
      title: 'Looking Forward',
      text: 'One way to remind yourself that this too shall pass is to give yourself something that you are looking forward to, that you can be excited about right now.'
    },
    {
      title: 'Looking Forward',
      text: 'What is one thing you are looking forward to?',
      component: (<EventForm key={0} />),
      conditions: eventCreated
    },
    {
      title: 'Looking Forward',
      text: 'You can update this anytime, whether the event has happened or not.'
    },
    { title: 'Feelings' },
    {
      title: 'Feelings',
      text: 'Sometimes strong feelings come on and it’s hard to think clearly about what you might want to do in response.'
    },
    {
      title: 'Feelings',
      text: 'We can’t always get rid of the feeling, but we can find ways to sit with it or get through it.'
    },
    {
      title: 'Feelings',
      text: 'What is a feeling you\'ve struggled with, and what are some things you might do or have done in response?',
      component: (<MoodForm key={1} />),
      conditions: moodCreated
    },
    {
      title: 'Feelings',
      text: 'As you discover what works and what doesn’t, you can update your lists.'
    },
    {
      title: 'Feelings',
      text: 'And you can add as many “Feelings” as you like.'
    },
    { title: 'Positives' },
    {
      title: 'Positives',
      text: 'There are so many wonderful things about you!'
    },
    {
      title: 'Positives',
      text: 'Take a moment to send a message to your future self with something you like/admire/value about who you are.'
    },
    {
      title: 'Positives',
      text: 'What is something you like about your self?',
      component: <PositiveForm key={2} />,
      conditions: positiveCreated
    },
    {
      title: 'Positives',
      text: 'You can continue to add more and more positive messages to yourself.'
    },
    {
      title: 'Positives',
      text: 'Or you can send the link below to the people who lift you up, and they can send you a positive message. (They don’t need an account).',
      component: <CopyLink key={4} link={`https://mental-health-dev.netlify.com/positive?friendcode=${friendCode}`} />
    },
    {
      title: 'Congrats!',
      text: 'You now have a mental health first aid kit!',
    }
  ];
  
  useEffect(() => {
    setCurrentRender(
      <div>
        {(<></>) && <h2>{slides[index].title}</h2>}
        {(<></>) && <p>{slides[index].text}</p>}
        {(<></>) && slides[index].component}
      </div>);
  }, [index]);

  const handleNext = () => {
    if(index === slides.length - 1) dispatch(updateUser({ newUser: false }));
    if(index < slides.length - 1) setIndex(index + 1);
    else history.push('./profile');
  };
  const handleBack = () => {
    if(index > 0) setIndex(index - 1);
  };

  return { index, slides, currentRender, handleNext, handleBack };
};
