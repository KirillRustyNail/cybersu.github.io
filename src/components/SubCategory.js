import React from 'react';

function SubCategory({ title }) {
  return (
    <div className="subcategory">
      <h3>{title}</h3>
      {/* Здесь можно добавить контент для каждой подкатегории */}
    </div>
  );
}

export default SubCategory;