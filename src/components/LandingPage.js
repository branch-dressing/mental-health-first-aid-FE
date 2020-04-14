import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useVerifyUser } from '../hooks/useVerifyUser';

export const LandingPage = () => {
  const history = useHistory();
  const { user, loading } = useSelector(toGetAuth);

  useVerifyUser();

  return (
    <section>
      <h2>Welcome</h2>
      <h3>Take a Breath</h3>
      {user ? 
        <button onClick={() => history.push('/profile')}>Home</button>
        :
        <button onClick={() => history.push('/auth')}>SignUp/Login</button>
      }
    </section>
  );
};
