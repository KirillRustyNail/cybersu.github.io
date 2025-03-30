import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubCategoryPage from './pages/SubCategoryPage';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryId/:subCategoryId" element={<SubCategoryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;