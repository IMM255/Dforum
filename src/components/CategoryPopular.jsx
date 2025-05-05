import React from 'react';
import PropTypes from 'prop-types';

const CategoryPopular = ({ categories, onCategoryClick, activeCategory }) => {
  return (
    <div className="flex flex-col gap-4 xl:px-16 ">
      <h1 className="xl:text-3xl text-xl md:text-2xl underline xl:text-center">
        Kategori Populer
      </h1>
      <div className="text-sm md:text-md xl:text-lg">
        <span
          className={`mx-1 my-1 inline-block border px-2 py-1 rounded-sm cursor-pointer ${
            activeCategory === null ? 'bg-black text-white' : ''
          }`}
          onClick={() => onCategoryClick(null)}
        >
          Semua
        </span>
        {categories.map((category) => (
          <span
            key={category}
            className={`mx-1 my-1 inline-block border px-2 py-1 rounded-sm cursor-pointer ${
              activeCategory === category ? 'bg-black text-white' : ''
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

CategoryPopular.propTypes = {
  categories: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  activeCategory: PropTypes.bool,
};
export default CategoryPopular;
