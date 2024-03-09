import { useEffect } from 'react';

function useIntersectionObserver(callback, loaderRef) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback?.();
      },
      { threshold: 0.4 },
    );

    const observe = (element) => {
      if (element) {
        observer.observe(element);
        return () => observer.unobserve(element);
      }
    };

    const unobserve = observe(loaderRef.current);
    return unobserve;
  }, [loaderRef, callback]);
}

export default useIntersectionObserver;
