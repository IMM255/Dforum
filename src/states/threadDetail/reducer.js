import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_DETAIL:
    return action.payload.detailThread;
  case ActionType.CLEAR_THREAD_DETAIL:
    return null;
  case ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL: {
    if (detailThread.id !== action.payload.threadId) {
      return detailThread;
    }
    const hasUpvoted = detailThread.upVotesBy.includes(action.payload.userId);
    return {
      ...detailThread,
      upVotesBy: hasUpvoted
        ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
        : [...detailThread.upVotesBy, action.payload.userId],
      downVotesBy: detailThread.downVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  }
  case ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL: {
    if (detailThread.id !== action.payload.threadId) {
      return detailThread;
    }
    const hasDownVoted = detailThread.downVotesBy.includes(
      action.payload.userId
    );
    return {
      ...detailThread,
      downVotesBy: hasDownVoted
        ? detailThread.downVotesBy.filter(
          (id) => id !== action.payload.userId
        )
        : [...detailThread.downVotesBy, action.payload.userId],
      upVotesBy: detailThread.upVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  }
  case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL: {
    if (detailThread.id !== action.payload.threadId) {
      return detailThread;
    }
    return {
      ...detailThread,
      upVotesBy: detailThread.upVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
      downVotesBy: detailThread.downVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  }
  case ActionType.ADD_COMMENT:
    return {
      ...detailThread,
      comments: [action.payload.comment, ...detailThread.comments],
    };
  case ActionType.TOGGLE_UP_VOTE_COMMENT:
    return {
      ...detailThread,
      comments: detailThread.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          const hasUpvoted = comment.upVotesBy.includes(
            action.payload.userId
          );
          return {
            ...comment,
            upVotesBy: hasUpvoted
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : [...comment.upVotesBy, action.payload.userId],
            downVotesBy: comment.downVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return comment;
      }),
    };
  case ActionType.TOGGLE_DOWN_VOTE_COMMENT:
    return {
      ...detailThread,
      comments: detailThread.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          const hasDownVoted = comment.downVotesBy.includes(
            action.payload.userId
          );
          return {
            ...comment,
            downVotesBy: hasDownVoted
              ? comment.downVotesBy.filter(
                (id) => id !== action.payload.userId
              )
              : [...comment.downVotesBy, action.payload.userId],
            upVotesBy: comment.upVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return comment;
      }),
    };
  default:
    return detailThread;
  }
}

export default threadDetailReducer;
