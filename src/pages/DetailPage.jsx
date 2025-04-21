import React, { useEffect } from 'react';
import ThreadDetail from '../components/ThreadDetail';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const DetailPage = () => {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!detailThread) {
    return null;
  }
  return (
    <section className="grid md:grid-cols-4 mt-10 place-items-center md:place-items-start mx-8 xl:mx-2">
      <CategoryPopular />

      <ThreadDetail {...detailThread} authUser={authUser.id} />

      <UserActive />
    </section>
  );
};

export default DetailPage;
