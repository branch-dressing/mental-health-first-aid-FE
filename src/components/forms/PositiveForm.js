import React from 'react';
import { usePositiveForm } from '../../hooks/forms/usePositiveForm';

export const PositiveForm = () => {
  const { message, setMessage, friendCode, setFriendCode, author, setAuthor, success, setSuccess, handleSubmit, friendCodeFromURL, usernameFromURL } = usePositiveForm();

  return success ? (
    <section>
      <p>Thanks for sending some love!</p>
      <button onClick={() => setSuccess(false)}>Send Another?</button>
    </section>
  ) : (
    <section>
      <div>
        <label>Message:</label>
        <textarea required
          type="text"
          value={message} 
          onChange={({ target }) => setMessage(target.value)} />
        

        {!friendCodeFromURL ? (<><label>Friend Code:</label>
          <input type="text" required
            value={friendCode} 
            onChange={({ target }) => setFriendCode(target.value)} /></>) : (<></>)}

        {!usernameFromURL ? (<><label>Author:</label>
          <input type="text" 
            value={author} 
            onChange={({ target }) => setAuthor(target.value)} /></>
        ) : (<></>)}

        <button onClick={handleSubmit}>Send</button>
      </div>
    </section>
  );
};
