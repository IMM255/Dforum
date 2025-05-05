import React, { useEffect, useState } from 'react';
import ThreadsList from '../components/ThreadsList';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';
import ThreadsInput from '../components/ThreadsInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncAddThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action';
import { asyncPopulateUserAndThreads } from '../states/shared/action';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };
  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const categories = [...new Set(threads.map((t) => t.category))];

  const filteredThreads = selectedCategory
    ? threads.filter((t) => t.category === selectedCategory)
    : threads;

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="min-h-screen grid md:grid-cols-4 mt-10 place-items-center md:place-items-start mx-8 xl:mx-2">
      <CategoryPopular
        categories={categories}
        onCategoryClick={setSelectedCategory}
        activeCategory={selectedCategory}
      />
      <div className="md:col-span-2 w-full">
        <ThreadsInput addThread={onAddThread} />
        <ThreadsList
          threads={threadList}
          upVotes={onUpVoteThread}
          downVotes={onDownVoteThread}
          neutralVotes={onNeutralVoteThread}
        />
      </div>
      <UserActive />
    </section>
  );
};

export default HomePage;
