import { FC, useState, useEffect, useRef } from 'react';
import Home from '@pages/home/Home';
import Loader from '@components/loader/Loader';
import { useTheme } from '@components/hooks/useTheme';
import './app.scss';

const App: FC = () => {
  const [isLoadingAssets, setIsLoadingAssets] =
    useState(true);

  const mounted = useRef(false);
  const appRef = useRef(null);

  const { isDarkMode } = useTheme();

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

  console.log(isDarkMode);

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={appLoading} />
      <Loader isLoading={appLoading} />
    </div>
  );
};

export default App;
