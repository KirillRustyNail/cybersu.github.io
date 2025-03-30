import React from 'react';
import { useParams } from 'react-router-dom';
import SubCategory from './SubCategory';

const categoriesData = {
  support: {
    title: 'Поддержка',
    items: ['GM Place', 'Благодарим за поддержку!']
  },
  equipment: {
    title: 'Снаряжение',
    items: [
      'Одежда и Стиль',
      'Оружейный магазин',
      'Броня',
      'Предметы',
      'Каталог Агентов и Аксессуаров',
      'Софт для Агента'
    ]
  },
  health: {
    title: 'Твое здоровье',
    items: [
      'Травмы',
      'Другие способы пострадать',
      'Наркотики и лекарства',
      'Лечение, терапия и установка имплантов'
    ]
  },
  city: {
    title: 'Город',
    items: [
      'NCPD',
      'Траума Тим',
      'Карта Найт-Сити',
      'Корпорации',
      'Места для Сбора'
    ]
  }
};

function CategoryPage() {
  const { categoryId } = useParams();
  const category = categoriesData[categoryId];

  if (!category) {
    return <div>Категория не найдена</div>;
  }

  return (
    <div className="category-page">
      <h1>{category.title}</h1>
      <div className="subcategories">
        {category.items.map((item, index) => (
          <SubCategory key={index} title={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;