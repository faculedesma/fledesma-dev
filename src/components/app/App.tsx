import { FC } from "react";
import Content from "@components/content/Content";
import Header from "@components/header/Header";
import MouseFollow from "@components/mouse-follow/MouseFollow";
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
      <MouseFollow />
    </div>
  );
};

export default App;
