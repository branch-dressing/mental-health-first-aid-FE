import React from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const errorMessage = error ? (<p>{error.message}</p>) : (<></>);

  return (
    <section style={{ border: 'solid 1px grey', padding: '5px', width: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '600px', margin: '0 auto', alignItems: 'center' }}>
        <SignUp />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ borderLeft: '1px solid grey', height: '50px' }}></div>
          <p style={{ border: 'solid 1px grey', borderRadius: '30px', padding: '10px' }}>or</p>
          <div style={{ borderLeft: '1px solid grey', height: '50px' }}></div>
        </div>
        <Login />
      </div>
      {errorMessage}
    </section> 
  );
};
