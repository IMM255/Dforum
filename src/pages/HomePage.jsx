import React from 'react';
import ThreadsList from '../components/ThreadsList';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';

const HomePage = () => {
  return (
    <section className="grid md:grid-cols-4 mt-10 place-items-center mx-8 xl:mx-2">
      <CategoryPopular />
      <ThreadsList />
      <UserActive />
    </section>
  );
};

export default HomePage;
