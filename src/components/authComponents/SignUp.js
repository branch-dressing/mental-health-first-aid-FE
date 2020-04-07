import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SignUp = () => {
  const { userName, setUserName, email, setEmail, password, setPassword, handleSubmit, retypePassword, setRetypePassword } = useAuth('signUp');

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Username: 
          <input type="text" 
            value={userName} 
            onChange={({ target }) => setUserName(target.value)} />
        </label>
        <br/>
        <label>Email: 
          <input type="text" 
            value={email} 
            onChange={({ target }) => setEmail(target.value)} />
        </label>
        <br/>
        <label>Password: 
          <input type="password" 
            value={password} 
            onChange={({ target }) => setPassword(target.value)} />
        </label>
        <br/>
        <label>Retype Password: 
          <input type="password" 
            value={retypePassword} 
            onChange={({ target }) => setRetypePassword(target.value)} />
        </label>
        <br/>
        <button>Sign Up</button>
      </form>

    </section>
  );
};
