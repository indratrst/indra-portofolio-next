import React, { useEffect } from "react";
import Hero from "../Hero";
import About from "../About";
import Portfolio from "../Portfolio";
import Project from "../Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "../Experience";
import Timeline from "../Timeline";

export const OrganismShell = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);
  return (
    <>
      <Hero text={""} />
      <About />
      <Experience />
      <Project />
      <Portfolio />
      {/* <Timeline /> */}
    </>
  );
};
