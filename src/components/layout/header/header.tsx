'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

interface HeaderProps {
  currentLanguage?: string;
  pathname?: string;
}

export default function Header({ currentLanguage = 'en', pathname = '/' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langOptionsRef = useRef<HTMLDivElement>(null);
  const langToggleRef = useRef<HTMLButtonElement>(null);
  
  // Get the path without language prefix
  const pathWithoutLang = pathname?.replace(/^\/(en|ja|ta)\//, '/') || '/';

  // Check if we're on a specific blog post page
  const isBlogPostPage = pathWithoutLang.match(/^\/blog\/[^/]+\/?$/);

  // Create URLs for each language
  const languageUrls: Record<string, string> = {
    en: isBlogPostPage ? '/blog' : pathWithoutLang,
    ja: isBlogPostPage ? '/ja/blog' : `/ja${pathWithoutLang}`,
    ta: isBlogPostPage ? '/ta/blog' : `/ta${pathWithoutLang}`
  };

  // Language display names
  const languageNames: Record<string, string> = {
    en: 'English',
    ja: '日本語',
    ta: 'தமிழ்'
  };

  // Menu text based on language
  const menuText: Record<string, Record<string, string>> = {
    en: {
      blog: 'Blog',
      contact: 'Contact',
      donate: 'Donate'
    },
    ja: {
      blog: 'ブログ',
      contact: 'お問い合わせ',
      donate: '寄付する'
    },
    ta: {
      blog: 'வலைப்பதிவு',
      contact: 'தொடர்பு',
      donate: 'நன்கொடை'
    }
  };

  // Determine active page
  const isBlogPage = pathWithoutLang.startsWith('/blog');
  const isContactPage = pathWithoutLang.startsWith('/contact');
  const isJapanese = currentLanguage === 'ja';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langOptionsRef.current && 
        langToggleRef.current && 
        !langOptionsRef.current.contains(event.target as Node) && 
        !langToggleRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMenuOpen) {
          setIsMenuOpen(false);
          document.body.classList.remove('menu-open');
        }
        
        if (isLangDropdownOpen) {
          setIsLangDropdownOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isMenuOpen, isLangDropdownOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
      // Close language dropdown when opening menu
      setIsLangDropdownOpen(false);
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Toggle language dropdown
  const toggleLangDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  // Close menu when clicking on a link
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
    
    // Also close language dropdown
    if (isLangDropdownOpen) {
      setIsLangDropdownOpen(false);
    }
  };

  return (
    <header 
      className={`${styles.bibHeader} ${isScrolled ? styles.scrolled : ''} ${isJapanese ? styles.japaneseTheme : ''}`}
      id="site-header"
    >
      <div className={styles.headerContainer}>
        <a 
          href={currentLanguage === 'en' ? '/' : `/${currentLanguage}/`}
          className={styles.bibLogo}
          data-astro-prefetch
        >
          {currentLanguage === 'ja' ? 'ビビリシャス' : 'Bibilicious'}
        </a>
        
        <nav 
          className={`${styles.bibNav} ${isMenuOpen ? styles.open : ''}`} 
          id="main-nav"
        >
          {/* Close button for mobile menu */}
          <button 
            className={styles.bibMobileMenuClose}
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className={styles.navLinks}>
            <a 
              href={currentLanguage === 'en' ? '/blog' : `/${currentLanguage}/blog`}
              className={`${styles.bibNavLink} ${isBlogPage ? styles.active : ''}`}
              data-astro-prefetch
              onClick={handleNavLinkClick}
            >
              {menuText[currentLanguage].blog}
            </a>
            
            <a 
              href={currentLanguage === 'en' ? '/contact' : `/${currentLanguage}/contact`}
              className={`${styles.bibNavLink} ${isContactPage ? styles.active : ''}`}
              data-astro-prefetch
              onClick={handleNavLinkClick}
            >
              {menuText[currentLanguage].contact}
            </a>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.bibLanguageDropdown}>
              <button 
                className={styles.languageCurrent}
                id="lang-toggle"
                aria-expanded={isLangDropdownOpen}
                aria-controls="lang-options"
                onClick={toggleLangDropdown}
                ref={langToggleRef}
              >
                <span className={styles.bibLangText}>{languageNames[currentLanguage]}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.bibIcon}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div 
                className={`${styles.languageOptions} ${isLangDropdownOpen ? styles.show : ''}`} 
                id="lang-options"
                ref={langOptionsRef}
              >
                {Object.entries(languageNames).map(([code, name]) => (
                  <a 
                    key={code}
                    href={languageUrls[code]}
                    className={`${styles.bibLangOption} ${currentLanguage === code ? styles.active : ''}`}
                    hrefLang={code}
                    lang={code}
                    data-astro-prefetch
                    onClick={handleNavLinkClick}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className={styles.bibDonateButton}>
              <a 
                href="https://www.buymeacoffee.com/bibilicious"
                target="_blank"
                rel="noopener"
                className={styles.bibBmacButton}
                onClick={handleNavLinkClick}
              >
                <span className={styles.bmacInner}>
                  <span className={styles.bibText}>{menuText[currentLanguage].donate}</span>
                </span>
              </a>
            </div>
          </div>
        </nav>
        
        <button 
          className={styles.bibMobileMenuToggle}
          id="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={toggleMenu}
        >
          <span className={styles.bibBar}></span>
          <span className={styles.bibBar}></span>
          <span className={styles.bibBar}></span>
          <span className={styles.bibSrOnly}>Menu</span>
        </button>
      </div>
      
      <div 
        className={`${styles.bibOverlay} ${isMenuOpen ? styles.show : ''}`} 
        id="menu-overlay"
        onClick={toggleMenu}
      ></div>
    </header>
  );
} 