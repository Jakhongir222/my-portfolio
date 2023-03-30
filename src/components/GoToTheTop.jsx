import React, { useState, useEffect } from 'react';
import up from '../images/up.png';
import '../styles/Footer.css';

function GoToTheTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleScrollUpClick = () => {
    const scrollStep = -window.pageYOffset / 20;
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset === 0) {
        clearInterval(scrollInterval);
      }
      window.scrollBy(0, scrollStep);
    }, 15);
    setShowScrollButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showScrollButton && (
        <img
          src={up}
          alt="Scroll to top"
          className="scroll-up-button"
          onClick={handleScrollUpClick}
          height={50}
        />
      )}
    </>
  );
}

export default GoToTheTop;
