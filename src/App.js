// App.js

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
