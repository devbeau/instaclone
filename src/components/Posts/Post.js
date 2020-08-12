import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  console.log(post.filtered);
  console.log("FUNC", likePost);
  return (
    <div className='post-border' display={post.filtered ? 'none' : 'inline-block'}>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection 
        likePost={likePost} 
        numberOfLikes = {post.likes} 
        id={post.id} 
        liked={post.liked} 
      />
      {/* Comments also wants its props! */}
      <Comments comments={post.comments}/>
    </div>
  );
};

export default Post;
