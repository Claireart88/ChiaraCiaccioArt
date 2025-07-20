import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Disable right-click context menu globally
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Disable common keyboard shortcuts for developer tools
document.addEventListener('keydown', (e) => {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    (e.ctrlKey && e.key === 'u')
  ) {
    e.preventDefault();
    return false;
  }
  
  // Disable Ctrl+S (save page)
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    return false;
  }
  
  // Disable Ctrl+A (select all) on images
  if (e.ctrlKey && e.key === 'a' && e.target instanceof HTMLImageElement) {
    e.preventDefault();
    return false;
  }
});

// Disable drag and drop globally
document.addEventListener('dragstart', (e) => {
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault();
    return false;
  }
});

// Disable text selection on images
document.addEventListener('selectstart', (e) => {
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault();
    return false;
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
