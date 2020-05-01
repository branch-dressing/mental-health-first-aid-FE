import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useVerifyUser } from '../hooks/useVerifyUser';

import styles from './Styles/LandingPage.css';

export const LandingPage = () => {
  const history = useHistory();
  const { user } = useSelector(toGetAuth);

  useVerifyUser();

  return (
    <section className={styles.landingPage}>
      <h2>Welcome</h2>
      <h3>Take a Breath</h3>
      <h3>Everything will be okay</h3>
      <div>
        <h4>About</h4>
        <p>Mental Health First Aid Kit was developed to be a resource for those being hit with strong feelings and not sure how to respond. The main idea behind this app is that you will be helping your future self deal with your mental health. </p>
        {user ? 
          <button onClick={() => history.push('/profile')}>Profile</button>
          :
          <button onClick={() => history.push('/auth')}>Get Started</button>
        }
      </div>
    </section>
  );
};
