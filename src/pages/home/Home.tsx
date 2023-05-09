import { lazy } from 'react';
import Hero from '@components/hero/Hero';
import Header from '@components/header/Header';
import MouseFollow from '@components/mouse-follow/MouseFollow';

const NoteOne = lazy(
  () => import('@components/notes/NoteOne')
);
const NoteTwo = lazy(
  () => import('@components/notes/NoteTwo')
);
const NoteThree = lazy(
  () => import('@components/notes/NoteThree')
);
const Services = lazy(
  () => import('@components/services/Services')
);
const History = lazy(
  () => import('@components/history/History')
);
const AboutMe = lazy(
  () => import('@components/about-me/AboutMe')
);
const Work = lazy(() => import('@components/work/Work'));
const Footer = lazy(
  () => import('@components/footer/Footer')
);

interface IHomeProps {
  isLoading: boolean;
  onLoad: () => void;
}

const Home = ({ isLoading, onLoad }: IHomeProps) => {
  return (
    <div className={`home ${!isLoading ? 'loaded' : ''}`}>
      <Header />
      <Hero isLoading={isLoading} handleLoaded={onLoad} />
      <NoteOne />
      <Services />
      <NoteTwo />
      <AboutMe />
      <History />
      <NoteThree />
      <Work />
      <Footer />
      {!isLoading && <MouseFollow />}
    </div>
  );
};

export default Home;
