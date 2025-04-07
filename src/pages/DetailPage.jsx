import React from 'react';
import ThreadsDetail from '../components/ThreadsDetail';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';

const DetailPage = () => {
  return (
    <section className="grid md:grid-cols-4 mt-10 place-items-center md:place-items-start mx-8 xl:mx-2">
      <CategoryPopular />
      <ThreadsDetail />
      <UserActive />
    </section>
  );
};

export default DetailPage;
