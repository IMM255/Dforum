import React from 'react';
import ThreadsItem from './ThreadsItem';
import PropTypes from 'prop-types';
const ThreadsList = ({ threads, upVotes, downVotes, neutralVotes }) => {
  return (
    <div className="flex gap-4 flex-col">
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
ThreadsList.propTypes = {
  threads: PropTypes.array.isRequired,
  upVotes: PropTypes.func,
  downVotes: PropTypes.func,
  neutralVotes: PropTypes.func.isRequired,
};
export default ThreadsList;
