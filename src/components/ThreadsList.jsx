import React from 'react';
import ThreadsItem from './ThreadsItem';

const ThreadsList = ({ threads, upVotes, downVotes }) => {
  return (
    <div className="">
      {threads.map((thread) => (
        <ThreadsItem
          key={thread.id}
          {...thread}
          upVotes={upVotes}
          downVotes={downVotes}
        />
      ))}
    </div>
  );
};

export default ThreadsList;
