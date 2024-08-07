'use client';

import React from 'react';

export default function ErrorBoundary({ error, reset }) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
