import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export const Header = () => {
  const { handleLogout } = useLogout();
  
  return (
    <section>
      <h1>Mental Health First Aid Kit</h1>
      <NavLink to='/profile'>Profile</NavLink>
      <br/>
      <NavLink to='/positive'>Send Positive</NavLink>
      <p onClick={handleLogout}>Logout</p>
    </section>
  );
};
