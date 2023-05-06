import React, { useEffect } from 'react';
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
  useEffect(() => {
    window.addEventListener('wheel', preventScroll, {
      passive: false
    });
    return () => {
      window.removeEventListener('wheel', preventScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.removeEventListener('wheel', preventScroll);
    }
  }, [isLoading]);

  return (
    <div
      className={`loader ${isLoading ? 'show' : 'hidden'}`}
    >
      Loading..
    </div>
  );
};

export default Loader;
