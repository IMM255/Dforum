import React from 'react';
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCommentAlt,
} from 'react-icons/fa';

import { postedAt } from '../utils';
import ThreadComment from './ThreadComment';

const ThreadDetail = ({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  createComment,
  authUser,
  upVotes,
  downVotes,
  upVoteComment,
  downVoteComment,
  neutralVotes,
}) => {
  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    if (isThreadUpVoted) {
      neutralVotes(id);
    } else {
      upVotes(id);
    }
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    if (isThreadDownVoted) {
      neutralVotes(id);
    } else {
      downVotes(id);
    }
  };

  const onUpVoteCommentClick = ({ event, commentId }) => {
    event.stopPropagation();
    upVoteComment({ commentId, userId: authUser, threadId: id });
  };

  const onDownVoteCommentClick = ({ event, commentId }) => {
    event.stopPropagation();
    downVoteComment({ commentId, userId: authUser, threadId: id });
  };

  if (!authUser || !upVotesBy || !downVotesBy) {
    return <p>Loading...</p>;
  }
  return (
    <div className="md:col-span-2 border pb-10">
      <div className=" py-4 px-8 flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            className="w-[72px] h-[72px] object-cover rounded-full"
            src={owner.avatar}
            alt={owner}
          />
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h5>
              Oleh {owner.name} - {postedAt(createdAt)}
            </h5>
            <span className="border  px-2 py-1 rounded-sm mt-2 inline-block">
              {category}
            </span>
          </div>
        </div>
        <p>{body}</p>
        <div className="flex gap-2">
          {upVotes && (
            <button
              onClick={onUpVoteClick}
              className="up-vote flex items-center gap-1"
            >
              {isThreadUpVoted ? (
                <FaArrowCircleUp className="text-3xl text-red-500" />
              ) : (
                <FaArrowCircleUp className="text-3xl " />
              )}
              <span>{upVotesBy.length}</span>
            </button>
          )}
          {downVotes && (
            <button
              onClick={onDownVoteClick}
              className="down-vote flex items-center gap-1"
            >
              {isThreadDownVoted ? (
                <FaArrowCircleDown className="text-3xl text-red-500" />
              ) : (
                <FaArrowCircleDown className="text-3xl " />
              )}
              <span>{downVotesBy.length}</span>
            </button>
          )}
          <div className="flex items-center gap-1">
            <FaCommentAlt className="text-3xl" />
            <span>{comments.length}</span>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h3 className="ps-8">Komentar</h3>
        {comments.map((comment) => {
          const isCommentUpVoted = comment.upVotesBy.includes(authUser);
          const isCommentDownVoted = comment.downVotesBy.includes(authUser);
          return (
            <div className="border-b w-[92%]  mx-auto">
              <div className=" py-4 px-8 flex flex-col gap-4">
                <div className="flex gap-4">
                  <img
                    className="w-[48px] h-[48px] object-cover rounded-full"
                    src={comment.owner.avatar}
                    alt=""
                  />
                  <div>
                    <h4>{comment.owner.name}</h4>
                    <h5 className="text-sm">{postedAt(createdAt)}</h5>
                  </div>
                </div>
                <p className="text-md">
                  {comment.content}
                  {comment.id}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) =>
                      onUpVoteCommentClick({ event: e, commentId: comment.id })
                    }
                    className="up-vote flex items-center gap-1"
                  >
                    {isCommentUpVoted ? (
                      <FaArrowCircleUp className="text-xl text-red-500" />
                    ) : (
                      <FaArrowCircleUp className="text-xl" />
                    )}

                    <span>{comment.upVotesBy.length}</span>
                  </button>
                  <button
                    onClick={(e) =>
                      onDownVoteCommentClick({
                        event: e,
                        commentId: comment.id,
                      })
                    }
                    className="down-vote flex items-center gap-1"
                  >
                    {isCommentDownVoted ? (
                      <FaArrowCircleDown className="text-xl text-red-500" />
                    ) : (
                      <FaArrowCircleDown className="text-xl" />
                    )}
                    <span>{comment.downVotesBy.length}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <ThreadComment createComment={createComment} />;
      </div>
    </div>
  );
};

export default ThreadDetail;
