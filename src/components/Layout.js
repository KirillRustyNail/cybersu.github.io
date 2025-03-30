import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './css/Layout.css';

function Layout({ children }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const isSubcategoryPage = pathParts[1] === 'subcategory';
  const subCategoryId = isSubcategoryPage ? pathParts[3] : null;

  // Преобразуем ID в читаемое название
  const getDisplayName = (id) => {
    const names = {
      'gm-place': 'GM Place',
      'thanks': 'Благодарим за поддержку!',
      'clothing': 'Одежда и Стиль',
      'weapons': 'Оружейный магазин',
      'armor': 'Броня',
      'items': 'Предметы',
      'agents': 'Каталог Агентов',
      'software': 'Софт для Агента',
      'injuries': 'Травмы',
      'other-damage': 'Другие способы пострадать',
      'drugs': 'Наркотики и лекарства',
      'treatment': 'Лечение и импланты',
      'ncpd': 'NCPD',
      'trauma-team': 'Траума Тим',
      'map': 'Карта Найт-Сити',
      'corporations': 'Корпорации',
      'meeting-places': 'Места для Сбора'
    };
    return names[id] || id;
  };

    return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="home-link">
            <h1>Дата-Пул</h1>
          </Link>
          
          {isSubcategoryPage && (
            <div className="subcategory-title">
              {getDisplayName(subCategoryId)}
            </div>
          )}

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