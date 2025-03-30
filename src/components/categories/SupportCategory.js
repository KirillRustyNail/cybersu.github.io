// src/components/categories/SupportCategory.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CategoryCard.css';

export default function SupportCategory() {
  return (
    <div className="category-card support-category">
      <h2 className="support-header">Поддержка</h2>
      <div className="subcategories-list">
        <Link to="/support/gm-place" className="subcategory-item support-item">
          <span className="icon">🛠️</span>
          GM Place
        </Link>
        <Link to="/support/thanks" className="subcategory-item support-item">
          <span className="icon">💎</span>
          Благодарим за поддержку!
        </Link>
      </div>
    </div>
  );
}