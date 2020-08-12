import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, filtered } = props;
 

  
const createPosts = posts => {
  // .filter(post => post.filtered !== true).
  return posts.map(post => {
    console.log(post.filtered);
    return <Post 
              post ={post} 
              key={post.id} 
              likePost={likePost} 
            />
  })
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
