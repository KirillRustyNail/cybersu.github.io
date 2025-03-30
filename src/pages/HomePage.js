import React from 'react';
import SupportCategory from '../components/categories/SupportCategory';
import EquipmentCategory from '../components/categories/EquipmentCategory';
// import HealthCategory from '../components/categories/HealthCategory';
// import CityCategory from '../components/categories/CityCategory';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Дата-Пул</h1>
      <div className="categories-container">
        <SupportCategory />
        <EquipmentCategory />
        {/* <HealthCategory />
        <CityCategory /> */}
      </div>
    </div>
  );
}

export default HomePage;