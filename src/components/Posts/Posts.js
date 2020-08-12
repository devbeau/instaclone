import React, {useEffect} from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  
const createPosts = posts => {
  return posts.filter(post => post.filtered !== true).map(post => <Post post ={post} key={post.id} likePost={likePost} display={posts.filtered ? 'none' : 'inline-block'}/>)
}

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {createPosts(posts)}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
