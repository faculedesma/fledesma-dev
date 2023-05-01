import Hero from "@components/hero/Hero";
import Header from "@components/header/Header";
import { NoteOne } from "@components/notes/NoteOne";
import { NoteTwo } from "@components/notes/NoteTwo";
import Services from "@components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <NoteOne />
      <Services />
      <NoteTwo />
    </div>
  );
};

export default Home;
