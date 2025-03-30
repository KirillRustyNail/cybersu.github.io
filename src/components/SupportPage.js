import React from 'react';
import { Link } from 'react-router-dom';
import './css/SupportPage.css';

function SupportPage() {
  return (
    <div className="support-page">
      <h2>Поддержка</h2>
      <div className="support-options">
        <Link to="/subcategory/support/gm-place" className="support-option">
          <h3>GM Place</h3>
          <p>Обратитесь к гейм-мастерам за помощью</p>
        </Link>
        <Link to="/subcategory/support/thanks" className="support-option">
          <h3>Благодарим за поддержку!</h3>
          <p>Наши спонсоры и партнёры</p>
        </Link>
      </div>
    </div>
  );
}

export default SupportPage;