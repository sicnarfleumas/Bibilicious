// japaneseTransitions.js
// This script enhances the Japanese-inspired transitions with additional effects

document.addEventListener('astro:page-load', () => {
  // Check if we're on a Japanese language page
  const isJapanesePage = document.documentElement.lang === 'ja';
  
  if (isJapanesePage) {
    // Add subtle paper texture effect to the background for Japanese pages
    document.body.classList.add('jp-texture');
    
    // Add subtle ink brush stroke effect to headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
      heading.classList.add('jp-brush-text');
    });
    
    // Add subtle paper fold effect to images
    const images = document.querySelectorAll('.hero-image img');
    images.forEach(img => {
      img.classList.add('jp-paper-fold');
    });
  }
});

// Listen for transition start
document.addEventListener('astro:before-preparation', ({ from, to, direction }) => {
  // Only apply these effects on Japanese pages
  if (document.documentElement.lang !== 'ja') return;
  
  // Add a class to the body to indicate transition direction
  document.body.classList.add(`jp-transition-${direction}`);
  
  // Create a subtle ripple effect at cursor position for Japanese pages
  if (window.lastClickPosition) {
    const ripple = document.createElement('div');
    ripple.classList.add('jp-ripple');
    ripple.style.left = `${window.lastClickPosition.x}px`;
    ripple.style.top = `${window.lastClickPosition.y}px`;
    document.body.appendChild(ripple);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 1000);
  }
});

// Track mouse click positions for ripple effect
document.addEventListener('click', (e) => {
  // Store the click position for use during transitions
  window.lastClickPosition = { x: e.clientX, y: e.clientY };
});

// Add styles for the Japanese transition effects
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .jp-texture {
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    
    .jp-brush-text {
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.05);
      position: relative;
    }
    
    .jp-brush-text::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.1) 80%, transparent);
      transform: scaleX(0.8);
      transform-origin: center;
    }
    
    .jp-paper-fold {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    
    .jp-paper-fold::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 20px 20px 0;
      border-color: transparent rgba(0, 0, 0, 0.05) transparent transparent;
    }
    
    .jp-ripple {
      position: fixed;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(156, 146, 172, 0.2) 0%, rgba(156, 146, 172, 0) 70%);
      transform: scale(0);
      animation: jp-ripple-effect 1s ease-out forwards;
      pointer-events: none;
      z-index: 9999;
    }
    
    @keyframes jp-ripple-effect {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
        transform: scale(0);
      }
      100% {
        width: 500px;
        height: 500px;
        margin-left: -250px;
        margin-top: -250px;
        opacity: 0;
        transform: scale(1);
      }
    }
    
    .jp-transition-forwards {
      overflow-x: hidden;
    }
    
    .jp-transition-backwards {
      overflow-x: hidden;
    }
  `;
  document.head.appendChild(style);
}); 