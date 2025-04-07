import React from 'react';
import img from '../assets/imam.jpg';

const UserActive = () => {
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] object-cover rounded-full"
              src={img}
              alt=""
            />
            <h5>Imam</h5>
          </div>
          <h5 className="font-bold">90</h5>
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] object-cover rounded-full"
              src={img}
              alt=""
            />
            <h5 className=" ">Muhammad Imam Arif Darmawan</h5>
          </div>
          <h5 className="font-bold">90</h5>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] object-cover rounded-full"
              src={img}
              alt=""
            />
            <h5>Imam</h5>
          </div>
          <h5 className="font-bold">90</h5>
        </div>
      </div>
    </div>
  );
};

export default UserActive;
