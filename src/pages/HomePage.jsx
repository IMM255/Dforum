import React, { useEffect } from 'react';
import ThreadsList from '../components/ThreadsList';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';
import ThreadsInput from '../components/ThreadsInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncAddThread,
  asyncToggleLikeThread,
} from '../states/threads/action';
import { asyncPopulateUserAndThreads } from '../states/shared/action';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  });
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onLike = (id) => {
    dispatch(asyncToggleLikeThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.email,
  }));

  return (
    <section className="grid md:grid-cols-4 mt-10 place-items-center mx-8 xl:mx-2">
      <CategoryPopular />
      {/* <div className="flex flex-col flex-wrap">
        <ThreadsInput />
        <ThreadsList />
      </div> */}
      <div className="md:col-span-2 w-full">
        <ThreadsInput addThread={onAddThread} />
        <ThreadsList threads={threadList} like={onLike} />
      </div>
      <UserActive />
    </section>
  );
};

export default HomePage;
