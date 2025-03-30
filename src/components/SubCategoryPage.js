import React from 'react';
import { useParams } from 'react-router-dom';
import './css/SubCategoryPage.css';

const allSubCategories = {
  support: [
    { id: 'gm-place', title: 'GM Place', content: 'Контент для GM Place...' },
    { id: 'thanks', title: 'Благодарим за поддержку!', content: 'Контент благодарности...' }
  ],
  equipment: [
    { id: 'clothing', title: 'Одежда и Стиль', content: 'Контент об одежде...' },
    { id: 'weapons', title: 'Оружейный магазин', content: 'Контент об оружии...' },
    // ... остальные подкатегории оборудования
  ],
  // ... другие категории
};

function SubCategoryPage() {
    const { categoryId, subCategoryId } = useParams();
    
    const category = allSubCategories[categoryId];
    const subCategory = category?.find(sc => sc.id === subCategoryId);
  
    if (!subCategory) {
      return <div>Подкатегория не найдена</div>;
    }
  
    return (
      <div className="subcategory-page">
        <h2>{subCategory.title}</h2>
        <div className="content">
          <p>{subCategory.content}</p>
        </div>
      </div>
    );
  }
  
  export default SubCategoryPage;