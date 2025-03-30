import React from 'react';
import CategorySection from './CategorySection';
import './css/HomePage.css';

const categoriesData = [
  {
    id: 'support',
    title: 'Поддержка',
    subCategories: [
      { id: 'gm-place', title: 'GM Place' },
    ]
  },
  {
    id: 'equipment',
    title: 'Снаряжение',
    subCategories: [
      { id: 'clothing', title: 'Одежда и Стиль' },
      { id: 'weapons', title: 'Оружейный магазин' },
      { id: 'armor', title: 'Броня' },
      { id: 'items', title: 'Предметы' },
      { id: 'agents', title: 'Каталог Агентов и Аксессуаров' },
      { id: 'software', title: 'Софт для Агента' }
    ]
  },
  {
    id: 'health',
    title: 'Твое здоровье',
    subCategories: [
      { id: 'injuries', title: 'Травмы' },
      { id: 'other-damage', title: 'Другие способы пострадать' },
      { id: 'drugs', title: 'Наркотики и лекарства' },
      { id: 'treatment', title: 'Лечение, терапия и установка имплантов' }
    ]
  },
  {
    id: 'city',
    title: 'Город',
    subCategories: [
      { id: 'ncpd', title: 'NCPD' },
      { id: 'trauma-team', title: 'Траума Тим' },
      { id: 'map', title: 'Карта Найт-Сити' },
      { id: 'corporations', title: 'Корпорации' },
      { id: 'meeting-places', title: 'Места для Сбора' }
    ]
  }
];

function HomePage() {
  return (
    <div className="home-page">
      <div className="categories-container">
        {categoriesData.map(category => (
          <CategorySection 
            key={category.id}
            title={category.title}
            subCategories={category.subCategories}
            categoryId={category.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;