import React from 'react';

import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className='post__who'>
              <img 
                src="https://gamebomb.ru/files/galleries/001/5/55/398793.jpg"
                alt="post_photo"
                className="post__photo"
              />
              <span className='name'><b>Aleksandr</b></span>
            </div>

            <div className='post__content'>
              <div className='post__message'>{ props.message }</div>
              <div className='post__message'>{ props.likesCount } likes</div>
            </div>
        </div>
    );
}

export default Post;
