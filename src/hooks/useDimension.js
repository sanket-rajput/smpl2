import { useState, useEffect, useRef } from 'react';

const useDimension = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(isMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);
    isMobileRef.current = mediaQuery.matches;

    const handleMediaQueryChange = (event) => {
      if (event.matches !== isMobileRef.current) {
        setIsMobile(event.matches);
        isMobileRef.current = event.matches;
      }
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

export default useDimension