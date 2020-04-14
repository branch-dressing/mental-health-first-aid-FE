import React, { useState } from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const errorMessage = error ? (<p>{error.message}</p>) : (<></>);

  return (
    <>
      <div>
        <SignUp />
        <p>or</p>
        <Login />
      </div>
      {errorMessage}
    </> 
  );
};
