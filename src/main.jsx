import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import StoreGrid from './Home/StoreGrid.jsx';
import ProductDetail from './ProductID/ProductDetail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<StoreGrid />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);