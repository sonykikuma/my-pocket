import { useState } from "react";
import "./App.css";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="w-full  bg-[#eaddf5]">
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <img src="/footer.png" alt="" className="mt-10" />
      </div>{" "}
    </>
  );
}

export default App;
