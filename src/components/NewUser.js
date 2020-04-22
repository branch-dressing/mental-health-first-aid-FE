import React from 'react';
import { useNewUser } from '../hooks/useNewUser';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useHistory } from 'react-router-dom';

import style from './Styles/NewUser.css';

export const NewUser = () => {
  const history = useHistory();
  const { user: { newUser } } = useSelector(toGetAuth);
  const { index, slides, currentRender, handleNext, handleBack } = useNewUser();

  if(newUser) {
    return (
      <section className={style.section}>
        <div className={style.slides}>
          <progress value={index} max={slides.length} />
          {currentRender}
        </div>
        <div className={style.buttons}>
          <button onClick={handleBack}>Back</button>
          <button disabled={!slides[index].conditionsMet} onClick={handleNext}>Next</button>
        </div>
      </section>
    );
  } else {
    history.replace('/profile');
    return null;
  }

};
