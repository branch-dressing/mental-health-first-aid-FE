import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { Avatar } from './Avatar';
import { Event } from './Event';
import { Option } from './Option';
import { Positives } from './Positives';
import { Moods } from './Moods';
import { useHistory } from 'react-router-dom';

import style from '../Styles/Profile.css';

export const Profile = () => {
  const { loading, user: { userName, collections, avatar, friendCode, newUser, } } = useSelector(toGetAuth);
  const history = useHistory();

  if(newUser) history.push(`/newuser?friendcode=${friendCode}&username=${userName}`);

  const renderOptions = collections ? collections.map(collection => {
    return (<Option key={collection} componentName={collection} />);
  }) : (<></>);


  return loading ? (<Loading />) : (
    <main>
      <div className={style.profileHeader}>
        <h2>Hello {userName}</h2>
        <span>Friend Code: {friendCode}</span>
        <Avatar avatar={avatar} />
        <Event />
      </div>
      <div className={style.allFeatures}>
        <Moods />
        <Positives />
      </div>
      {/* {renderOptions}
      <Option /> */}
    </main>
  );
};
