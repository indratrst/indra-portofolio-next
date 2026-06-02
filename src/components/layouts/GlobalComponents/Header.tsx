"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Toggle from "../../molecules/Toggles";
import ToggleLanguage from "@/components/molecules/ToggleLanguage";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };

    window.addEventListener("scroll", handleScroll);

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
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }

        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#project",
    },
    {
      label: "Achievements",
      href: "#achievement",
    },
    {
      label: "Timeline",
      href: "#timeline",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-5">
        <div
          className={`
            transition-all
            duration-500
            rounded-2xl
            border
            ${isAtTop
              ? "border-transparent bg-transparent"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
            }
          `}
        >
          <div className="flex items-center justify-between px-5 py-4">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <ToggleLanguage />

              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="h-2 w-2 rounded-full bg-green-500" />

                  <div>
                    <h1 className="text-white font-medium tracking-tight">
                      Indra Tristia
                    </h1>

                    <p className="text-xs text-zinc-500">
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-white
                      "
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {/* <div className="hidden lg:flex">
                <Toggle />
              </div> */}

              <a
                href="#contact"
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                Contact Me
                <ArrowRight size={16} />
              </a>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="
                  lg:hidden
                  flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  backdrop-blur-xl
                "
              >
                {isMenuOpen ? (
                  <X size={18} />
                ) : (
                  <Menu size={18} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden px-4 pb-4">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-zinc-900/90
                  backdrop-blur-xl
                  p-4
                "
              >
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="
                          block
                          rounded-xl
                          px-4
                          py-3
                          text-zinc-300
                          transition-colors
                          hover:bg-white/5
                          hover:text-white
                        "
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
                  <Toggle />

                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-black
                    "
                  >
                    Contact
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}