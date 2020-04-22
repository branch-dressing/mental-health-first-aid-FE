import React from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

import style from '../Styles/AuthPage.css';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const rednerError = error ? (
    <div className={style.error}>
      <hr />
      <p>{error.message}</p>
    </div>
  ) : (<></>);

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
      {rednerError}
    </section> 
  );
};
