import React from 'react';
import CommentItem from './CommentItem';


const CommentList = ({ comments, authUser, upVoteComment, downVoteComment, threadId}) => {
  const onUpVoteCommentClick = ({ event, commentId }) => {
    event.stopPropagation();
    upVoteComment({ commentId, userId: authUser, threadId: threadId });
  };

  const onDownVoteCommentClick = ({ event, commentId }) => {
    event.stopPropagation();
    downVoteComment({ commentId, userId: authUser, threadId: threadId });
  };
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          onUpVote={onUpVoteCommentClick}
          onDownVote={onDownVoteCommentClick}
        />
      ))}

    </>
  );
};

export default CommentList;
