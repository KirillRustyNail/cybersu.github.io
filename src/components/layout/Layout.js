import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const isSubcategoryPage = pathParts.length > 2;
  const currentSubcategory = isSubcategoryPage ? pathParts[2] : null;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-inner">
          <div className="header-left">
            <Link to="/" className="home-link">
              <p>Дата-Пул</p>
            </Link>
          </div>
          
          {isSubcategoryPage && (
            <div className="header-center">
              {currentSubcategory.replace(/-/g, ' ')}
            </div>
          )}

          <div className="header-right">
            <Link to="/support/gm-place" className="support-link">
              Поддержка
            </Link>
          </div>
        </div>
      </header>
      
      <main className="app-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;