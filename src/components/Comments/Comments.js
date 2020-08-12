import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const {comments} = props;
  console.log(comments);
  const createComments = comments => {
   return comments.map(comment => <Comment comment ={comment} key={comment.id}/>)
  };

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {createComments(comments)}
    </div>
  );
};

export default Comments;
