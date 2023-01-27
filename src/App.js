import React from "react";

import { Footer, Blog, Possibility, Features, Header } from "./containers";
import { Cta } from "./components";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AboutCopyFi from "./containers/whatcopyfi/AboutCopyFi";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <AboutCopyFi />
      <Possibility />
      {/* <Cta /> */}
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
