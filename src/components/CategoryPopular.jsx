import React from 'react';

const CategoryPopular = () => {
  return (
    <div className="flex flex-col gap-4 xl:px-16 ">
      <h1 className="xl:text-3xl text-xl md:text-2xl underline xl:text-center">
        Kategori Populer
      </h1>
      <div className="text-sm md:text-md xl:text-lg">
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          Coding
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          React
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          Perkenalan
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          Laravel
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          PHP
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          Perkenalan
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          Laravel
        </span>
        <span className="mx-1 my-1 inline-block border px-2 py-1 rounded-sm">
          PHP
        </span>
      </div>
    </div>
  );
};

export default CategoryPopular;
