import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_UP_VOTE_THREAD: {
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
    case ActionType.TOGGLE_DOWN_VOTE_THREAD: {
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
    default:
      return detailThread;
  }
}

export default threadDetailReducer;
