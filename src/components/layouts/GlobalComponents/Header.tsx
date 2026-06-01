"use client";

import { useEffect, useState } from "react";
import Toggle from "../../molecules/Toggles";
import Image from "next/image";
import ToggleLanguage from "@/components/molecules/ToggleLanguage";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 left-0 w-full flex items-center z-[9999]  transition-colors duration-1000  ${
          isAtTop
            ? "bg-basic border-b-0 dark:bg-dark dark:border-dark"
            : "bg-basic backdrop-blur-md border-b-[2px] border-l-2  dark:bg-dark dark:border-dark"
        }`}
      >
        <div className="2xl:container">
          <div className="flex items-center justify-between">
            <div className="lg:px-4 flex justify-center items-center px-9">
              {/* <Image
                src="/logo-new-2.svg"
                width={300}
                height={56}
                alt="pic hero"
                className="h-14 transform lg:scale-[1.3] "
              /> */}
              <ToggleLanguage />
              <h1 className="font-bold text-lg text-primary block py-6">
                Indra Tristia
              </h1>
            </div>

            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block absolute right-16 lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300"></span>
              </button>

              <nav
                id="nav-menu"
                className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none dark:bg-dark dark:lg:bg-transparent dark:shadow-red-900 ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-sand border-b-2 border-b-transparent  group-hover:border-b-sand "
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-sand border-b-2 border-b-transparent  group-hover:border-b-sand "
                    >
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#experience"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-sand border-b-2 border-b-transparent  group-hover:border-b-sand "
                    >
                      Experience
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#project"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-sand border-b-2 border-b-transparent  group-hover:border-b-sand "
                    >
                      Project
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#achievement"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-sand border-b-2 border-b-transparent  group-hover:border-b-sand "
                    >
                      Achievement
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#timeline"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-sand border-b-2 border-b-transparent  group-hover:border-b-sand "
                    >
                      Timeline
                    </a>
                  </li>

                  <li className="flex items-center mt-3 lg:mt-0 justify-center">
                    <Toggle />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
