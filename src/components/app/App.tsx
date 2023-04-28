import { FC } from "react";
import Content from "@components/content/Content";
import Header from "@components/header/Header";
import "./app.scss";

const Home: FC = () => (
  <>
    <Header />
    <Content />
  </>
);

const App: FC = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;
