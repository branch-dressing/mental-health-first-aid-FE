import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { toGetAuth } from '../selectors/useSelectors';
import { useSelector } from 'react-redux';

import style from './Styles/Header.css';

export const Header = () => {
  const { user } = useSelector(toGetAuth);
  const { handleLogout } = useLogout();

  const logoutButton = user ? (
    <button className={style.logout} onClick={handleLogout}>Logout</button>
  ) : (<></>);

  return (
    <section className={style.header}>
      <h1 className={style.siteTitle}>Mental Health First Aid Kit</h1>
      {logoutButton}
    </section>
  );
};
