import React from 'react';
import { useParams } from 'react-router-dom';

// Импорты всех компонентов подкатегорий
import GmPlace from '../components/categories/subcategories/support/GmPlace';
import Thanks from '../components/categories/subcategories/support/Thanks';
import Weapons from '../components/categories/subcategories/equipment/Weapons';
import Clothing from '../components/categories/subcategories/equipment/Clothing';
// ... другие импорты

const componentsMap = {
  support: {
    'gm-place': GmPlace,
    'thanks': Thanks
  },
  equipment: {
    'clothing': Clothing,
    'weapons': Weapons
    // ... другие подкатегории
  }
  // ... другие категории
};

function SubCategoryPage() {
  const { categoryId, subCategoryId } = useParams();
  const SubCategoryComponent = componentsMap[categoryId]?.[subCategoryId];

  if (!SubCategoryComponent) {
    return <div>Подкатегория не найдена</div>;
  }

  return (
    <div className="subcategory-page">
      <SubCategoryComponent />
    </div>
  );
}

export default SubCategoryPage;