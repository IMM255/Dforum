import React from 'react';
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCommentAlt,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

const ThreadsItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  upVotes,
  downVotes,
  neutralVotes,
  authUser,
}) => {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    if (upVotesBy.includes(authUser)) {
      neutralVotes(id);
    } else {
      upVotes(id);
    }
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    if (downVotesBy.includes(authUser)) {
      neutralVotes(id);
    } else {
      downVotes(id);
    }
  };

  return (
    <div
      role="button"
      onClick={onThreadClick}
      className="border py-4 px-8 flex flex-col gap-4"
    >
      <div className="flex gap-4">
        <img
          className="w-[72px] h-[72px] object-cover rounded-full"
          src={user.avatar}
          alt=""
        />
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <h5>
            Oleh {user.name} - {postedAt(createdAt)}
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
            className="up-vote flex items-center gap-1"
            onClick={onUpVoteClick}
          >
            {upVotesBy.includes(authUser) ? (
              <FaArrowCircleUp className="text-3xl text-red-500" />
            ) : (
              <FaArrowCircleUp className="text-3xl " />
            )}

            <span>{upVotesBy.length}</span>
          </button>
        )}
        {downVotes && (
          <button
            className="up-vote flex items-center gap-1"
            onClick={onDownVoteClick}
          >
            {downVotesBy.includes(authUser) ? (
              <FaArrowCircleDown className="text-3xl text-red-500" />
            ) : (
              <FaArrowCircleDown className="text-3xl" />
            )}

            <span>{downVotesBy.length}</span>
          </button>
        )}

        <div className="comment flex items-center gap-1 ">
          <FaCommentAlt className="text-3xl" />
          <span>{totalComments}</span>
        </div>
      </div>
    </div>
  );
};
ThreadsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotes: PropTypes.func,
  downVotes: PropTypes.func,
  neutralVotes: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
export default ThreadsItem;
