import React, { useState, useEffect, useRef } from 'react';
// Import Bmac dynamically to avoid server-side rendering issues
import './Header.css';

export default function Header({ currentLanguage = 'en' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [pathWithoutLang, setPathWithoutLang] = useState('');
  const [languageUrls, setLanguageUrls] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);
  
  // Language display names
  const languageNames = {
    en: 'English',
    ja: '日本語',
    ta: 'தமிழ்'
  };
  
  // Donate button text based on language
  const donateText = {
    en: 'Donate',
    ja: '寄付する',
    ta: 'நன்கொடை'
  };
  
  // Initialize client-side data
  useEffect(() => {
    setIsClient(true);
    
    // Get the current path without language prefix
    const path = window.location.pathname;
    setCurrentPath(path);
    
    const pathNoLang = path.replace(/^\/(en|ja|ta)\//, '/');
    setPathWithoutLang(pathNoLang);
    
    // Create URLs for each language
    // Check if we're on a specific blog post page
    const isBlogPostPage = pathNoLang.match(/^\/blog\/[^/]+\/?$/);
    
    setLanguageUrls({
      en: isBlogPostPage ? '/blog' : pathNoLang,
      ja: isBlogPostPage ? '/ja/blog' : `/ja${pathNoLang}`,
      ta: isBlogPostPage ? '/ta/blog' : `/ta${pathNoLang}`
    });
  }, []);
  
  // Determine active page - only run on client
  const isHomePage = isClient ? (pathWithoutLang === '/' || pathWithoutLang === '') : false;
  const isBlogPage = isClient ? pathWithoutLang.startsWith('/blog') : false;
  const isContactPage = isClient ? pathWithoutLang.startsWith('/contact') : false;
  
  // Handle scroll effect
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!isClient) return;
    
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav') && !e.target.closest('.mobile-menu-toggle')) {
        setIsMenuOpen(false);
      }
      
      if (isLangDropdownOpen && langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, isLangDropdownOpen, isClient]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isClient) return;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isClient]);
  
  // Toggle language dropdown
  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };
  
  // If we're not on the client yet, render a minimal version
  if (!isClient) {
    return (
      <header className={`${currentLanguage === 'ja' ? 'japanese-theme' : ''}`}>
        <div className="header-container">
          <a 
            href={currentLanguage === 'en' ? '/' : `/${currentLanguage}/`} 
            className="logo"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            {currentLanguage === 'ja' ? 'ビビリシャス' : 'Bibilicious'}
          </a>
          <nav>
            <div className="nav-links">
              <a 
                href={currentLanguage === 'en' ? '/blog' : `/${currentLanguage}/blog`}
              >
                {currentLanguage === 'ja' ? 'ブログ' : 'Blog'}
              </a>
              
              <a 
                href={currentLanguage === 'en' ? '/contact' : `/${currentLanguage}/contact`}
              >
                {currentLanguage === 'ja' ? 'お問い合わせ' : 'Contact'}
              </a>
            </div>
            
            <div className="header-right">
              <div className="language-dropdown" ref={langDropdownRef}>
                <button className="language-current">
                  <span>{languageNames[currentLanguage]}</span>
                </button>
              </div>
              
              <div className="donate-button">
                <a 
                  href="https://www.buymeacoffee.com/bibilicious" 
                  target="_blank"
                  className="bmac-button"
                >
                  <div className="bmac-inner">
                    <span className="text">{donateText[currentLanguage]}</span>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
  
  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${currentLanguage === 'ja' ? 'japanese-theme' : ''}`}>
      <div className="header-container">
        <a 
          href={currentLanguage === 'en' ? '/' : `/${currentLanguage}/`} 
          className="logo"
          style={{ color: '#000', textDecoration: 'none' }}
        >
          {currentLanguage === 'ja' ? 'ビビリシャス' : 'Bibilicious'}
        </a>
        
        <nav className={isMenuOpen ? 'open' : ''}>
          <div className="nav-links">
            <a 
              href={currentLanguage === 'en' ? '/blog' : `/${currentLanguage}/blog`} 
              className={isBlogPage ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLanguage === 'ja' ? 'ブログ' : 'Blog'}
            </a>
            
            <a 
              href={currentLanguage === 'en' ? '/contact' : `/${currentLanguage}/contact`} 
              className={isContactPage ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLanguage === 'ja' ? 'お問い合わせ' : 'Contact'}
            </a>
          </div>
          
          <div className="header-right">
            <div className="language-dropdown" ref={langDropdownRef}>
              <button 
                className="language-current" 
                onClick={toggleLangDropdown}
              >
                <span>{languageNames[currentLanguage]}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className={`language-options ${isLangDropdownOpen ? 'show' : ''}`}>
                {Object.entries(languageNames).map(([code, name]) => (
                  <a 
                    key={code}
                    href={languageUrls[code]} 
                    className={`lang-option ${currentLanguage === code ? 'active' : ''}`}
                    hrefLang={code}
                    lang={code}
                    onClick={() => {
                      setIsLangDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="donate-button">
              <a 
                href="https://www.buymeacoffee.com/bibilicious" 
                target="_blank"
                className="bmac-button"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="bmac-inner">
                  <span className="text">{donateText[currentLanguage]}</span>
                </div>
              </a>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="mobile-menu-background">
              <div className="sakura-container">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="sakura-petal" style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 5 + 10}s`
                  }}></div>
                ))}
              </div>
            </div>
          )}
        </nav>
        
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
} 