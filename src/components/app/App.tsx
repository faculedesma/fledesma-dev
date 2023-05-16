import { FC, useState, useEffect, useRef } from 'react';
import Home from '@pages/home/Home';
import Loader from '@components/loader/Loader';
import { loadInitialAssets } from 'src/utils/utils';
import './app.scss';

const App: FC = () => {
  const [isLoadingAssets, setIsLoadingAssets] =
    useState(true);

  const mounted = useRef(false);
  const appRef = useRef(null);

  const handleIsLoaded = () => setIsLoadingAssets(false);

  const handleLoadInitialAssets = async () => {
    await loadInitialAssets();
    handleIsLoaded();
  };

  useEffect(() => {
    mounted.current = true;
    handleLoadInitialAssets();

    return () => {
      mounted.current = false;
    };
  }, []);

  const appLoaded = isLoadingAssets;

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={appLoaded} />
      <Loader isLoading={appLoaded} />
    </div>
  );
};

export default App;
