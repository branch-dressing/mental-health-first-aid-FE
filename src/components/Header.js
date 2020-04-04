import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Styles/Header.css';

export const Header = () => {
  return (
    <section>
      <h1 className={style.siteTitle}>Mental Health First Aid Kit</h1>
      <div className={style.navigationBar}>
        <NavLink to='/profile'>Profile</NavLink>
        <br/>
        <NavLink to='/positive'>Send Positive</NavLink>
      </div>
    </section>
  );
};
