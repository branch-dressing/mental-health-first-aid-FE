import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CopyLink = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = ({ target }) => {
    target.select();
    document.execCommand('copy');
    setCopied(true);
  };

  return (
    <div>
      <label>{copied ? 'Copied: ' : 'Click to copy: '}</label>
      <input 
        readOnly 
        onClick={handleClick}
        value={link} />
    </div>
  );
};

CopyLink.propTypes = {
  link: PropTypes.string.isRequired
};
