import { lazy } from 'react';
import Hero from '@components/hero/Hero';
import Header from '@components/header/Header';

const NoteOne = lazy(() => import('@components/notes/NoteOne'));
const NoteTwo = lazy(() => import('@components/notes/NoteTwo'));
const NoteThree = lazy(() => import('@components/notes/NoteThree'));
const Services = lazy(() => import('@components/services/Services'));
const ServicesTwo = lazy(() => import('@components/services/Services'));
const History = lazy(() => import('@components/history/History'));
const AboutMe = lazy(() => import('@components/about-me/AboutMe'));
const Work = lazy(() => import('@components/work/Work'));
const Process = lazy(() => import('@components/process/Process'));
const Footer = lazy(() => import('@components/footer/Footer'));

interface IHomeProps {
  isLoading: boolean;
}

const Home = ({ isLoading }: IHomeProps) => {
  return (
    <div className={`home ${!isLoading ? 'loaded' : ''}`}>
      <Header isLoading={isLoading} />
      <Hero isLoading={isLoading} />
      <NoteOne />
      <Services />
      <NoteTwo />
      <AboutMe />
      <Process />
      <History />
      <NoteThree />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
