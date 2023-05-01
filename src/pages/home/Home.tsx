import Hero from "@components/hero/Hero";
import Header from "@components/header/Header";
import { NoteOne } from "@components/notes/NoteOne";
import Services from "@components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <NoteOne />
      <Services />
    </div>
  );
};

export default Home;
