// Vite entry point
// Import global styles so Vite bundles them
import '../styles.css';

// Load legacy app.js after DOM is ready
window.addEventListener('DOMContentLoaded', async () => {
  await import('../app.js');
});
