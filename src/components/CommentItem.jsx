import React from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';


const CommentItem = ({
  id,
  authUser,
  onUpVote,
  onDownVote,
  upVotesBy,
  downVotesBy,
  owner,
  createdAt,
  content
}) => {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);
  return (
    <div className="border-b w-[92%] mx-auto">
      <div className="py-4 px-8 flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            className="w-[48px] h-[48px] object-cover rounded-full"
            src={owner.avatar}
            alt=""
          />
          <div>
            <h4>{owner.name}</h4>
            <h5 className="text-sm">{postedAt(createdAt)}</h5>
          </div>
        </div>
        <p className="text-md">
          {content.replace(/<[^>]*>?/gm, '')}
        </p>
        <div className="flex gap-2">
          <button
            onClick={(e) =>
              onUpVote({ event: e, commentId: id })
            }
            className="up-vote flex items-center gap-1"
          >
            {isUpVoted ? (
              <FaArrowCircleUp className="text-xl text-red-500" />
            ) : (
              <FaArrowCircleUp className="text-xl" />
            )}
            <span>{upVotesBy.length}</span>
          </button>
          <button
            onClick={(e) =>
              onDownVote({ event: e, commentId: id })
            }
            className="down-vote flex items-center gap-1"
          >
            {isDownVoted ? (
              <FaArrowCircleDown className="text-xl text-red-500" />
            ) : (
              <FaArrowCircleDown className="text-xl" />
            )}
            <span>{downVotesBy.length}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommentItem;
