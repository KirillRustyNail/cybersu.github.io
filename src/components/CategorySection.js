import React from 'react';
import { Link } from 'react-router-dom';
import './css/CategorySection.css';

function CategorySection({ title, subCategories, categoryId }) {
  return (
    <div className="category-section">
      <h2>{title}</h2>
      <ul>
        {subCategories.map(subCategory => (
          <li key={subCategory.id}>
            <Link to={`/subcategory/${categoryId}/${subCategory.id}`}>
              {subCategory.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySection;