import React, { useEffect } from "react";
import Hero from "../Hero";
import About from "../About";
import Portfolio from "../Timeline";
import Project from "../Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "../Experience";
import Achievement from "../Achievement";

export const OrganismShell = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="border-none md:border-none bg-[#0A0A0A] min-h-screen">
        <Hero />
        {/* <About /> */}
        <Experience />
        <Project />
        <Achievement />
        <Portfolio />
      </div>

      {/* <Timeline /> */}
    </>
  );
};
