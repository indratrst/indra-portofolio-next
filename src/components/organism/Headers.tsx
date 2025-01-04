"use client";

import { useEffect, useState } from "react";
import Toggle from "../molecules/Toggles";

export default function Header() {
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
            ? "bg-transparent border-b-0 dark:bg-dark dark:border-dark"
            : "bg-white/70 backdrop-blur-md border-b-[2px] border-l-2  dark:bg-dark dark:border-dark"
        }`}
      >
        <div className="container bg-transparent">
          <div className="flex items-center justify-between relative ">
            <div className="px-4 ">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6 "
              >
                Indra Tristia
              </a>
            </div>

            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none dark:bg-dark dark:lg:bg-transparent dark:shadow-red-900"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Achievement
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#timeline"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Timeline
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#project"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Project
                    </a>
                  </li>
                  <li className="flex items-center mt-3 lg:mt-0 sm:justify-center">
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
