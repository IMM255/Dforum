import React from 'react';
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCommentAlt,
} from 'react-icons/fa';
import img from '../assets/imam.jpg';
import { postedAt } from '../utils';

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
}) => {
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
            <span>0</span>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h3 className="ps-8">Komentar</h3>
        <div className="border-b w-[92%]  mx-auto">
          <div className=" py-4 px-8 flex flex-col gap-4">
            <div className="flex gap-4">
              <img
                className="w-[48px] h-[48px] object-cover rounded-full"
                src={img}
                alt=""
              />
              <div>
                <h4>Imam</h4>
                <h5 className="text-sm">4 menit yang lalu</h5>
              </div>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              adipisci inventore est, earum magni saepe corporis at rem
              reiciendis debitis.
            </p>
            <div className="flex gap-2">
              <div className="up-vote flex items-center gap-1">
                <FaArrowCircleUp className="text-xl" />
                <span>1</span>
              </div>
              <div className="down-vote flex items-center gap-1">
                <FaArrowCircleDown className="text-xl" />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8">
          <h3>Tambahkan Komentar</h3>
          <textarea className="w-full h-22 border" name="" id=""></textarea>
          <button className="border px-2 py-1 w-full">Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;
