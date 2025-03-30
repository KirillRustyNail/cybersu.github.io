import React from 'react';
//import './styles/SubCategoryPage.css';

function Thanks() {
  const sponsors = [
    { name: "NightCorp", tier: "Platinum" },
    { name: "Arasaka", tier: "Gold" },
    { name: "Militech", tier: "Silver" }
  ];

  return (
    <div className="subcategory-content holographic">
      <h2 className="glowing-text">Благодарим за поддержку!</h2>
      
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card" data-tier={sponsor.tier}>
            <div className="sponsor-badge">{sponsor.tier}</div>
            <h3>{sponsor.name}</h3>
          </div>
        ))}
      </div>
      
      <div className="donation-info">
        <p>Ваша поддержка помогает развивать проект</p>
        <button className="neon-button">Стать спонсором</button>
      </div>
    </div>
  );
}

export default Thanks;