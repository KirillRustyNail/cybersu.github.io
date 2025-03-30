import React from 'react';

function CategoryCard({ title, items }) {
  return (
    <div className="category-card">
      <h2>{title}</h2>
      <ul>
        {items.slice(0, 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {items.length > 3 && <li>...</li>}
      </ul>
    </div>
  );
}

export default CategoryCard;