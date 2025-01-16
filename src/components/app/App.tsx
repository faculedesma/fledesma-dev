import { FC, useState, useEffect, useRef } from 'react';
import { getCalApi } from '@calcom/embed-react';

import Home from '@pages/home/Home';
import Loader from '@components/loader/Loader';
import MouseFollow from '@components/mouse-follow/MouseFollow';
import useTheme from '@components/hooks/useTheme';

import './app.scss';

const App: FC = () => {
  const [isLoadingAssets, setIsLoadingAssets] = useState(true);
  const [theme] = useTheme();

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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: theme === 'dark' ? 'dark' : 'light',
        styles: {
          branding: { brandColor: theme === 'dark' ? '#000000' : 'ffffff' }
        }
      });
    })();
  }, [theme]);

  const appLoading = isLoadingAssets;

  return (
    <div id="app" ref={appRef} className={`app ${theme}`}>
      <Home isLoading={appLoading} />
      <Loader isLoading={appLoading} />
      {!appLoading && <MouseFollow />}
    </div>
  );
};

export default App;
