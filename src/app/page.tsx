import About from "@/components/organism/About";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Headers";
import Hero from "@/components/organism/Hero";
import Portfolio from "@/components/organism/Portfolio";
import Project from "@/components/organism/Project";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        {/* <Timeline /> */}
        <Project />
        <Footer />
      </ThemeProvider>
    </>
  );
}
