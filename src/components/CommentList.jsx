import React from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';


const CommentList = ({ comments, authUser, upVoteComment, downVoteComment, threadId }) => {
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

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      owner: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  threadId: PropTypes.string.isRequired,
};
export default CommentList;
