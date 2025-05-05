import React from 'react';
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCommentAlt,
} from 'react-icons/fa';

import { postedAt } from '../utils';
import PropTypes from 'prop-types';
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
  authUser,
  upVotes,
  downVotes,
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


  return (
    <div className=" py-4 px-8 flex flex-col gap-4 ">
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
      <p>{body.replace(/<[^>]*>?/gm, '')}</p>
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

  );
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      owner: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  createComment: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotes: PropTypes.func,
  downVotes: PropTypes.func,
  neutralVotes: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
