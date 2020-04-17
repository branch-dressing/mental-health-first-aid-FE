import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SignUp = () => {
  const { userName, setUserName, email, setEmail, password, setPassword, handleSubmit, retypePassword, setRetypePassword, hidePassword, setHidePassword } = useAuth('signUp');

  return (
    <section>
      <h2>New User</h2>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: 
          <input autoFocus
            required
            type='text' 
            value={userName} 
            onChange={({ target }) => setUserName(target.value)} />
        </label>
        <br/>
        <label>Email: 
          <input required
            type='text' 
            value={email} 
            onChange={({ target }) => setEmail(target.value)} />
        </label>
        <br/>
        <label>Password: 
          <input required
            type={hidePassword ? 'password' : 'text'} 
            value={password} 
            onChange={({ target }) => setPassword(target.value)} />
          <span onClick={() => setHidePassword(!hidePassword)}>👁‍🗨</span>
        </label>
        <br/>
        <label>Retype Password: 
          <input required
            type={hidePassword ? 'password' : 'text'} 
            value={retypePassword} 
            onChange={({ target }) => setRetypePassword(target.value)} />
        </label>
        <br/>
        <button>Sign Up</button>
      </form>

    </section>
  );
};
