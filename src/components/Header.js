import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { toGetAuth } from '../selectors/useSelectors';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { user } = useSelector(toGetAuth);
  const { handleLogout } = useLogout();

  const logoutButton = user ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (<></>);

  return (
    <section>
      <h1>Mental Health First Aid Kit</h1>
      <NavLink to='/profile'>Profile</NavLink>
      <br/>
      <NavLink to='/positive'>Send Positive</NavLink>
      {logoutButton}
    </section>
  );
};
