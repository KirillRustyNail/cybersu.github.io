import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SubCategoryPage from './components/SubCategoryPage';
import Layout from './components/Layout';
import SupportPage from './components/SupportPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route 
          path="/subcategory/:categoryId/:subCategoryId" 
          element={<Layout><SubCategoryPage /></Layout>} 
        />
        <Route 
          path="/support" 
          element={<Layout><SupportPage /></Layout>} 
        />
      </Routes>
    </Router>
  );
}

export default App;