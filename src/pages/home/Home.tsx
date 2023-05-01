import Hero from "@components/hero/Hero";
import Header from "@components/header/Header";
import { NoteOne } from "@components/notes/NoteOne";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <NoteOne />
    </div>
  );
};

export default Home;
