import { FC, useState, useEffect, useRef } from 'react';
import Home from '@pages/home/Home';
import Loader from '@components/loader/Loader';
import './app.scss';

const App: FC = () => {
  const [isLoadingAssets, setIsLoadingAssets] =
    useState(true);
  const [is3DLoading, setIs3DLoading] = useState(true);

  const mounted = useRef(false);
  const appRef = useRef(null);

  const handleIsLoaded = () => setIsLoadingAssets(false);

  const handle3DLoaded = () => setIs3DLoading(false);

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

  const appLoaded = isLoadingAssets || is3DLoading;

  return (
    <div id="app" ref={appRef} className="app">
      <Home isLoading={appLoaded} onLoad={handle3DLoaded} />
      <Loader isLoading={appLoaded} />
    </div>
  );
};

export default App;
