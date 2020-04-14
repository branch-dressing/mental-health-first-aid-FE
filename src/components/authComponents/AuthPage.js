import React from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

import style from '../Styles/AuthPage.css';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const errorMessage = error ? (<p>{error.message}</p>) : (<></>);

  return (
    <section className={style.authPage}>
      <div className={style.forms}>
        <SignUp />
        <div className={style.seperator}>
          <div className={style.vl}></div>
          <p className={style.or}>or</p>
          <div className={style.vl}></div>
        </div>
        <Login />
      </div>
      <div className={style.error}>
        {errorMessage}
      </div>
    </section> 
  );
};
