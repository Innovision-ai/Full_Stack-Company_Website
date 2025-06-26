import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
