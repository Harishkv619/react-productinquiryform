import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductInquiryForm from './components/ProductInquiryForm';
import ThankYouPage from './components/ThankYouPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductInquiryForm />,
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);