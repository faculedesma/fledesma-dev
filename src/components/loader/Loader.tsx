import React, { useEffect, useRef, useState } from 'react';
import './loader.scss';

interface ILoaderProps {
  isLoading: boolean;
}

const preventScroll = (e: WheelEvent) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const Loader: React.FC<ILoaderProps> = ({ isLoading }) => {
  const [number, setNumber] = useState<number>(0);

  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('wheel', preventScroll, {
      passive: false
    });
    return () => {
      window.removeEventListener('wheel', preventScroll);
    };
  }, []);

  useEffect(() => {
    function increase() {
      const randomIncrement =
        Math.floor(Math.random() * 10) + 1;
      setNumber((prevNumber) =>
        prevNumber + randomIncrement > 100
          ? 100
          : prevNumber + randomIncrement
      );
    }

    if (number < 100) {
      const timeoutId = setTimeout(increase, 100); // Increase every second (adjust as needed)
      return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout
    }
  }, [number]);

  useEffect(() => {
    if (!isLoading && loaderRef.current) {
      window.removeEventListener('wheel', preventScroll);
      loaderRef.current.classList.add('hidden');
    }
  }, [isLoading]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="number">
        <p>{number}%</p>
      </div>
    </div>
  );
};

export default Loader;
