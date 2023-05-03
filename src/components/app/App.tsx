import { FC, useState, useEffect, useRef } from 'react';
import Home from '@pages/home/Home';
import Loader from '@components/loader/Loader';
import MouseFollow from '@components/mouse-follow/MouseFollow';
import './app.scss';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const mounted = useRef(false);
  const appRef = useRef(null);

  const handleIsLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    mounted.current = true;
    window.addEventListener('load', handleIsLoaded);

    return () => {
      window.removeEventListener('load', handleIsLoaded);
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    // for mobile
    if (document.readyState === 'complete') {
      setTimeout(() => handleIsLoaded(), 5000);
    }
  }, [document.readyState]);

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={isLoading} />
      <Loader isLoading={isLoading} />
      <MouseFollow />
    </div>
  );
};

export default App;
