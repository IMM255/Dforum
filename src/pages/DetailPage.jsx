import React, { useEffect } from 'react';
import ThreadsDetail from '../components/ThreadsDetail';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const DetailPage = () => {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  },[id,dispatch]);

  // if (!threadDetail) {
  //   return null;
  // }
  return (
    <section className="grid md:grid-cols-4 mt-10 place-items-center md:place-items-start mx-8 xl:mx-2">
      <CategoryPopular />
      <ThreadsDetail />
      <UserActive />
    </section>
  );
};

export default DetailPage;
