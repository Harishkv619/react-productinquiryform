import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductInquiryForm from './components/ProductInquiryForm';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<ProductInquiryForm />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;