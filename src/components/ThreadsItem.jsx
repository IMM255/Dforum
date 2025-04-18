import React from 'react';
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCommentAlt,
} from 'react-icons/fa';
import img from '../assets/imam.jpg';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

const ThreadsItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) => {
  {
    const navigate = useNavigate();
  }
  return (
    <div className="border py-4 px-8 flex flex-col gap-4">
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
        <div className="up-vote flex items-center gap-1">
          <FaArrowCircleUp className="text-3xl" />
          <span>1</span>
        </div>
        <div className="down-vote flex items-center gap-1">
          <FaArrowCircleDown className="text-3xl" />
          <span>0</span>
        </div>
        <div className="comment flex items-center gap-1 ">
          <FaCommentAlt className="text-3xl" />
          <span>{totalComments}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreadsItem;
