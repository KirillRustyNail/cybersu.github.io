import React from 'react';
import { Link } from 'react-router-dom';
import './css/Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <Link to="/" className="home-link">
            <p>Дата-Пул</p>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/support" className="support-link">
            Поддержка
          </Link>
        </div>
      </header>
      <main className="app-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;