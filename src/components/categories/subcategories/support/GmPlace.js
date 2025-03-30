import React from 'react';
//import './styles/SubCategoryPage.css';

function GmPlace() {
  return (
    <div className="subcategory-content neon-border">
      <h2 className="neon-text">GM Place</h2>
      <div className="content-grid">
        <div className="info-card">
          <h3>Техническая поддержка</h3>
          <p>Обратитесь к гейм-мастерам для решения технических вопросов</p>
          <ul className="contact-list">
            <li>Discord: @gamemaster</li>
            <li>Email: gm@datapool.nc</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h3>Последние обновления</h3>
          <div className="update-item">
            <span className="update-date">[10.11.2077]</span>
            <p>Исправлены баги в системе инвентаря</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GmPlace;