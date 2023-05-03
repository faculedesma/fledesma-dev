import Hero from '@components/hero/Hero';
import Header from '@components/header/Header';
import { NoteOne } from '@components/notes/NoteOne';
import { NoteTwo } from '@components/notes/NoteTwo';
import { NoteThree } from '@components/notes/NoteThree';
import Services from '@components/services/Services';
import History from '@components/history/History';
import Work from '@components/work/Work';
import Footer from '@components/footer/Footer';

interface IHomeProps {
  isLoading: boolean;
}

const Home = ({ isLoading }: IHomeProps) => {
  return (
    <div className={`home ${!isLoading ? 'loaded' : ''}`}>
      <Header />
      <Hero />
      <NoteOne />
      <Services />
      <NoteTwo />
      <History />
      <NoteThree />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
