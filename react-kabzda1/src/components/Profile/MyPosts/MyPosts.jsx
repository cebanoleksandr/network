import React from 'react';
import Post from './Post/Post';
import './MyPosts.css';

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(post => {
        return <Post message={post.post} likesCount={post.likesCount} />
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="posts-block">
            <h3>My posts</h3>
            <div>
              <div>
                  <textarea onChange={onPostChange} ref={newPostElement} placeholder="Add your post" value={props.newPostText} />
              </div>
              <div>
                  <button onClick={ onAddPost }>Add post</button>
              </div>
            </div>
            <div className='post-content'>
              { postsElements }
            </div>
        </div>
    );
})

export default MyPosts;
