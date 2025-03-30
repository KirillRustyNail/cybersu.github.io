import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CategoryCard.css';

function EquipmentCategory() {
  return (
    <div className="category-card">
      <h2>Снаряжение</h2>
      <div className="subcategories-list">
        <Link to="/equipment/clothing" className="subcategory-item">
          Одежда и Стиль
        </Link>
        <Link to="/equipment/weapons" className="subcategory-item">
          Оружейный магазин
        </Link>
        {/* ... другие подкатегории */}
      </div>
    </div>
  );
}

export default EquipmentCategory;