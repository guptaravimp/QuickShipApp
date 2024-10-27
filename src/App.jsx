import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import DeliveryEstimator from './pages/DeliveryEstimator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/estimate" element={<DeliveryEstimator />} />
      </Routes>
    </Router>
  );
}
