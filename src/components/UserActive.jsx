import React, { useEffect } from 'react';
import img from '../assets/imam.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

const UserActive = () => {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  console.log('leaderboard', leaderboards);
  return (
    <div className="xl:px-12 w-full mt-6 md:mt-0 md:ms-6 xl:ms-0 ">
      <h1 className="xl:text-4xl md:text-2xl text-xl  font-semibold text-center">
        Pengguna Aktif
      </h1>
      <div className="flex justify-between my-2">
        <h3 className="xl:text-lg md:text-md font-semibold">Pengguna</h3>
        <h3 className="xl:text-lg md:text-md font-semibold">Skor</h3>
      </div>
      <div className="flex flex-col gap-8  text-sm">
        {leaderboards.map((item) => (
          <div key={item.user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-[50px] w-[50px] object-cover rounded-full"
                src={item.user.avatar} // pakai avatar dari API
                alt={item.user.name}
              />
              <h5>{item.user.name}</h5>
            </div>
            <h5 className="font-bold">{item.score}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActive;
