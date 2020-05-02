import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SignUp = () => {
  const { userName, setUserName, email, setEmail, password, setPassword, handleSubmit, retypePassword, setRetypePassword, hidePassword, setHidePassword } = useAuth('signUp');

  return (
    <section>
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input autoFocus
          required
          type='text' 
          value={userName} 
          onChange={({ target }) => setUserName(target.value)} />
        <label>Email:</label>
        <input required
          type='text' 
          value={email} 
          onChange={({ target }) => setEmail(target.value.toLowerCase())} />
        <label>Password:<span onClick={() => setHidePassword(!hidePassword)}>👁‍🗨</span></label>
        <input required
          type={hidePassword ? 'password' : 'text'} 
          value={password} 
          onChange={({ target }) => setPassword(target.value)} />

        <label>Retype Password:</label>
        <input required
          type={hidePassword ? 'password' : 'text'} 
          value={retypePassword} 
          onChange={({ target }) => setRetypePassword(target.value)} />

        <button>Sign Up</button>
      </form>

    </section>
  );
};
