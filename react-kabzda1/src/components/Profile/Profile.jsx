import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import './Profile.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <main className='profile'>
      <ProfileInfo 
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;
