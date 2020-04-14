import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const { email, setEmail, password, setPassword, setRetypePassword, handleSubmit, hidePassword, setHidePassword } = useAuth('login');

  return (
    <section>
      <h2>Existing User</h2>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <label>Email: 
          <input 
            type='text'
            value={email}
            onChange={({ target }) => setEmail(target.value)} />
        </label>
        <br/>
        <label>Password: 
          <input 
            type={hidePassword ? 'password' : 'text'}
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
              setRetypePassword(target.value);
            }} />
          <span onClick={() => setHidePassword(!hidePassword)}>👁‍🗨</span>
        </label>
        <br/>
        <button>Login</button>
      </form>
    </section>
  );
};
