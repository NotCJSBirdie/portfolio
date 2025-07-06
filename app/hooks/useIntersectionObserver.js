import { useCallback } from 'react';
import { InView } from 'react-intersection-observer';

export const useIntersectionObserver = (options = {}) => {
  const defaultOptions = {
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  const renderInView = useCallback(({ inView, ref, children, style = {} }) => {
    const animationStyle = {
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(40px)',
      transition: 'all 0.5s ease-out',
      ...style,
    };

    return (
      <div ref={ref} style={animationStyle}>
        {children}
      </div>
    );
  }, []);

  return {
    InView,
    renderInView,
    options: defaultOptions,
  };
}; 