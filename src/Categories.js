import React from 'react';

const Categories = ({ categories, setCategories, filter }) => {
  return (
    <div className='btn-container'>
      {categories.map((item, i) => {
        return (
          <button
            key={i}
            className='filter-btn'
            onClick={filter.bind(null, item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
