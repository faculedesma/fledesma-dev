import { FC, useState, useEffect, useRef } from 'react';
import Home from '@pages/home/Home';
import Loader from '@components/loader/Loader';
import './app.scss';

const App: FC = () => {
  const [isLoadingAssets, setIsLoadingAssets] =
    useState(true);

  const mounted = useRef(false);
  const appRef = useRef(null);

  const handleIsLoaded = () => setIsLoadingAssets(false);

  useEffect(() => {
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
      handleIsLoaded();
    }
  }, [document.readyState]);

  const appLoaded = isLoadingAssets;

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={appLoaded} />
      <Loader isLoading={appLoaded} />
    </div>
  );
};

export default App;
