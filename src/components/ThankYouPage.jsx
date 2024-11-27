import React from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const ThankYouPage = () => {
  const location = useLocation();
  const { state } = location;  

  if (!state) {
    return <Alert variant="danger">No form data available.</Alert>;
  }

  return (
    <div>
      <Alert variant="success">
        <h4>Thank you for your inquiry!</h4>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <p><strong>Message:</strong> {state.message}</p>
      </Alert>
    </div>
  );
};

export default ThankYouPage;