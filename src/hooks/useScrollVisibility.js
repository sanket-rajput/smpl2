import { useState, useEffect, useRef } from 'react';

const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
    lastScrollY.current = window.scrollY; 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return isVisible;
};

export default useScrollVisibility;
