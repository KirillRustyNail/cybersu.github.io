import React from 'react';
//import './styles/SubCategoryPage.css';

const clothingItems = [
  { name: "Киберпанк-жилет", price: "750€", rarity: "Rare" },
  { name: "Неоновый комбинезон", price: "1200€", rarity: "Epic" },
  { name: "Бронеплащ", price: "2500€", rarity: "Legendary" }
];

function Clothing() {
  return (
    <div className="subcategory-content">
      <h2 className="fashion-header">Одежда и Стиль</h2>
      
      <div className="fashion-showcase">
        {clothingItems.map((item, index) => (
          <div key={index} className="clothing-item" data-rarity={item.rarity}>
            <div className="clothing-image"></div>
            <h3>{item.name}</h3>
            <div className="price-tag">{item.price}</div>
            <span className="rarity-badge">{item.rarity}</span>
          </div>
        ))}
      </div>
      
      <div className="style-tips">
        <h3>Советы стилиста:</h3>
        <p>Сочетайте не более 3 активных неоновых элементов в одном образе</p>
      </div>
    </div>
  );
}

export default Clothing;