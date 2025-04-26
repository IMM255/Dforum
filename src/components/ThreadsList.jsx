import React from 'react';
import ThreadsItem from './ThreadsItem';

const ThreadsList = ({ threads, upVotes, downVotes, neutralVotes }) => {
  return (
    <div className="">
      {threads.map((thread) => (
        <ThreadsItem
          key={thread.id}
          {...thread}
          upVotes={upVotes}
          downVotes={downVotes}
          neutralVotes={neutralVotes}
        />
      ))}
    </div>
  );
};

export default ThreadsList;
