import React from 'react';
import PropTypes from 'prop-types';
import { useAvatar } from '../../hooks/useAvatar';

import style from '../Styles/Avatar.css';

export const Avatar = ({ avatar }) => {
  const { display, setDisplay, url, setUrl, handleSubmit } = useAvatar();

  const renderForm = (
    <div className={style.form}>
      <input
        type='text'
        value={url}
        onChange={({ target }) => setUrl(target.value)} />
      <br/>
      <div>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={() => {
          setDisplay(false);
          setUrl('');
        }}>Cancel</button>
      </div>
    </div>
  );

  const renderAvatar = avatar ? (
    <img className={style.img} onClick={() => setDisplay(!display)} src={avatar} />
  ) : (
    <div>
      <h5 onClick={() => setDisplay(true)}>+ Set avatar</h5>
    </div>
  );
  
  return (
    <section className={style.component}>
      {display ? renderForm : renderAvatar}
    </section>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string
};
