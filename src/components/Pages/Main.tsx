"use client";
import React, { useEffect } from "react";
import Header from "../organism/Headers";
import Hero from "../organism/Hero";
import About from "../organism/About";
import Portfolio from "../organism/Portfolio";
import Project from "../organism/Project";
import Footer from "../organism/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      {/* <Timeline /> */}
      <Project />
      <Footer />
    </>
  );
};

export default Main;
