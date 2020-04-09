import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/Profile.css';

export const Positive = ({ message, author, seen }) => (
  <>
    <p>{seen ? (<></>) : (<span className={style.dot}></span>)} &quot;{message}&quot;</p>
    <p>from {author}</p>
  </>
);

Positive.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired
};
