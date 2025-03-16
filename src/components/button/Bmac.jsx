import React, { useState } from 'react';

export default function Bmac({ language = 'en' }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Donate button text based on language
  const donateText = {
    en: 'Donate',
    ja: '寄付する',
    ta: 'நன்கொடை'
  };
  
  return (
    <a 
      href="https://www.buymeacoffee.com/bibilicious" 
      target="_blank"
      className={`bmac-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bmac-inner">
        <span className="text">{donateText[language]}</span>
      </div>
    </a>
  );
}

// CSS to be added to a separate CSS file 