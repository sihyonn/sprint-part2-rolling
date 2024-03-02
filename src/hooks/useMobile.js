import { useState, useEffect } from 'react';

const useMobile = (mobileWidthThreshold = 767) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileWidthThreshold,
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= mobileWidthThreshold);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileWidthThreshold]);

  return isMobile;
};

export default useMobile;
