import { useEffect, useRef, useState } from 'react';

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const previousScrollY = useRef(0);
  const scrollDirectionRef = useRef(scrollDirection);

  useEffect(() => {
    scrollDirectionRef.current = scrollDirection;
  }, [scrollDirection]);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > previousScrollY.current ? 'down' : 'up';

      if (direction !== scrollDirectionRef.current && Math.abs(currentScrollY - previousScrollY.current) > 10) {
        setScrollDirection(direction);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDirection;
}
