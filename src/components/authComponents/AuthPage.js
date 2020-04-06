import React, { useState } from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const errorMessage = error ? (<p>{error.message}</p>) : (<></>);
  const [signUp, setSignUp] = useState(true);

  const buttonText = signUp ? 'I want to Login' : 'I need SignUp';

  return (
    <>
      <button onClick={() => setSignUp(!signUp)}>{buttonText}</button>
      {signUp ? <SignUp /> : <Login />}
      {errorMessage}
    </> 
  );
};
