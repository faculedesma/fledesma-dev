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

  const handleLoadInitialAssets = async () => {
    setTimeout(() => {
      handleIsLoaded();
    }, 3000);
  };

  useEffect(() => {
    mounted.current = true;
    handleLoadInitialAssets();

    return () => {
      mounted.current = false;
    };
  }, []);

  const appLoading = isLoadingAssets;

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={appLoading} />
      <Loader isLoading={appLoading} />
    </div>
  );
};

export default App;
