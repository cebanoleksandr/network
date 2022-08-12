import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHocks from './ProfileStatusWithHocks';

import './ProfileInfo.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
    }

    return (
        <>
          <div className='profile__picture'></div>
          <div className='profile__description'>
            <img src={props.profile.photos.large} alt='ava' />
            <ProfileStatusWithHocks 
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
        </>
    );
}

export default ProfileInfo;
