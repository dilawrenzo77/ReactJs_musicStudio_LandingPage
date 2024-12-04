import React from "react";
import NavBar from "./components/navBar/navBar";
import Intro from "./components/intro/intro";
import IntroTwo from "./components/intro_two/intro_two";
import IntroThree from "./components/intro_three/intro_three";
import IntroFour from "./components/intro_four/intro_four";
import IntroFive from "./components/intro_five/intro_five";
import IntroSix from "./components/intro_six/intro_six";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <IntroTwo />
      <IntroThree />
      <IntroFour />
      <IntroFive />
      <IntroSix />
      <Footer />
    </div>
  )
}

export default App;

