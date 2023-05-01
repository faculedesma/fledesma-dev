import { FC } from "react";
import Home from "@pages/home/Home";
import MouseFollow from "@components/mouse-follow/MouseFollow";
import "./app.scss";

const App: FC = () => {
  return (
    <div className="app">
      <Home />
      <MouseFollow />
    </div>
  );
};

export default App;
