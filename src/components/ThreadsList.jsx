import React from 'react';
import ThreadsItem from './ThreadsItem';

const ThreadsList = ({ threads, like }) => {
  return (
    <div className="">
      {threads.map((thread) => (
        <ThreadsItem key={thread.id} {...thread} like={like} />
      ))}
    </div>
  );
};

export default ThreadsList;
