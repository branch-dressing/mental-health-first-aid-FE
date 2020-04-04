import React, { useState, useEffect } from 'react';


export const Breathing = () => {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [currentDirection, setCurrentDirection] = useState('');

  useEffect(() => {
    console.log(running);
    if(running) {
      setSeconds(1);
      setCurrentDirection('Breath In');
    }
  }, [running]);

  useEffect(() => {
    if(running && seconds === 8) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        setCurrentDirection('Breath Out');
      }, 100);
    }
    if(running && currentDirection === 'Breath In' && seconds < 8) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }
  }, [seconds]);

  useEffect(() => {
    if(running && seconds === 0) {
      setSeconds(seconds + 1);
      setCurrentDirection('Breath In');
    }
    if(running && currentDirection === 'Breath Out' && seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  }, [seconds]);

  const handleClick = () => {
    setRunning(!running);
  };


  return (
    <section>
      <p>{seconds}</p>
      <p>{currentDirection}</p>
      <button onClick={handleClick}>{running ? 'Stop' : 'Start'}</button>
    </section>

  );
};
