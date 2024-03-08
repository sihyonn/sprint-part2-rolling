import React, { useEffect, useRef, useState } from 'react';
import { GridTemplate } from '@styles/commonStyle';
import CardMessagesSkeleton from './CardMessagesSkeleton';

const calculateComponentCount = (width) => {
  if (width < 768) return 2;
  if (width < 1248) return 4;
  return 6;
};

/**
 * 카드 메시지 무한스크롤 로더
 */

function InfiniteCardMessagesLoader({ loaderRef, ...props }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentNumberRef = useRef(calculateComponentCount(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    componentNumberRef.current = calculateComponentCount(windowWidth);
  }, [windowWidth]);

  return (
    <GridTemplate ref={loaderRef} {...props}>
      {Array.from({ length: componentNumberRef.current }).map((_, index) => (
        <CardMessagesSkeleton className="카드" key={index} />
      ))}
    </GridTemplate>
  );
}

export default InfiniteCardMessagesLoader;
