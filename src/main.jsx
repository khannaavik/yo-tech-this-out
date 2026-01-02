import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Verify root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 2rem; background: red; color: white; font-size: 2rem;">ERROR: Root element not found</div>';
} else {
  console.log('Root element found, rendering App...');
  
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Failed to render App:', error);
    rootElement.innerHTML = `
      <div style="padding: 2rem; background: red; color: white; font-size: 1.5rem;">
        <h1>Rendering Error</h1>
        <p>${error.toString()}</p>
        <pre>${error.stack}</pre>
      </div>
    `;
  }
}

