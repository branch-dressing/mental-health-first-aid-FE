import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const { email, setEmail, password, setPassword, setRetypePassword, handleSubmit, hidePassword, setHidePassword } = useAuth('login');

  return (
    <section>
      <h2>Existing User</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input required
          type='text'
          value={email}
          onChange={({ target }) => setEmail(target.value.toLowerCase())} />
        <label>Password: <span onClick={() => setHidePassword(!hidePassword)}>👁‍🗨</span></label>
        <input required
          type={hidePassword ? 'password' : 'text'}
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
            setRetypePassword(target.value);
          }} />
        <button>Login</button>
      </form>
    </section>
  );
};
