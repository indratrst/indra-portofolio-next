"use client";

import Link from "next/link";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#project" },
    { label: "Achievements", href: "#achievement" },
    { label: "Timeline", href: "#timeline" },
  ];

  return (
    <section
      id="home"
      className="scroll-mt-28 relative min-h-[100svh] overflow-hidden bg-[#F4F3EF] text-[#111111]"
    >
      {/* Subtle editorial grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="mx-auto h-full max-w-full border-x border-[#D8D6D0]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-full flex-col px-5 sm:px-8 lg:px-12">
        {/* ------------------------------------------------ */}
        {/* HERO HEADER                                      */}
        {/* ------------------------------------------------ */}

        <header className="relative z-20">
          <div className="flex items-center justify-between border-b border-[#D8D6D0] py-4 sm:py-5">
            <Link
              href="#home"
              className="text-[28px] font-semibold uppercase tracking-[-0.011em] sm:text-[35px]"
            >
              Indra
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.14em] text-[#777777] transition-colors duration-200 hover:text-[#111111]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Toggle mobile navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D6D0] bg-[#F5F4F1] text-[#111111] shadow-sm transition-all duration-200 hover:border-[#111111] md:hidden"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="pt-3 absolute right-0 md:hidden">
              <div className="rounded-2xl border border-[#D8D6D0] bg-[#F7F6F3]/90 p-3 shadow-[0_16px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-[#303030] transition-colors duration-200 hover:bg-[#EAE7E1] hover:text-[#111111]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </header>

        {/* ------------------------------------------------ */}
        {/* HERO CONTENT                                     */}
        {/* ------------------------------------------------ */}

        <div className="grid flex-1 grid-cols-1 pt-8 sm:pt-10 lg:grid-cols-12 lg:pt-0">
        {/* Eyebrow */}
          <div className="lg:col-span-2 pt-5 lg:pt-9">
            {/* <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#777777]">
              Tristia
            </p> */}
            <h1 className="max-w-[1250px] text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] md:text-[12vw] lg:text-[7.2vw]">
              <span className="block">
                Tristia<span className="text-[#0d4dbb]"></span>
              </span>
              {/* <span className="block pl-[7vw] lg:pl-[10svw]">
                Indra Tristia<span className="text-[#0d4dbb]">.</span>
              </span> */}
            </h1>

            {/* <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#999999]">
              01 / 04
            </p> */}
          </div>

          {/* Main typography */}
          <div className="flex flex-col justify-center pb-1 pt-52 lg:col-span-9 lg:col-start-1 lg:pb-0 lg:pt-32">
            <div className="relative top-0 md:top-16 md:block">
            <h1 className="max-w-[1250px] text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[4.2vw]">
              <span className="block pb-2">
                I&apos;m<span className="text-[#0d4dbb]"></span>
              </span>
            </h1>

            <h1 className="max-w-[1250px] text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[8.2vw]">
              <span className="block pl-[7vw] lg:pl-[2svw]">Frontend</span>
              <span className="block pl-[18vw] lg:pl-[20svw]">
                Developer<span className="text-[#0d4dbb]">.</span>
              </span>
            </h1>
            </div>

            <div className="pointer-events-none absolute transform right-1/2 translate-x-1/2 md:translate-x-0 md:right-[10vw] top-[22%] md:top-[18%] z-0opacity-100 lg:block">
              {" "}
              <div className="relative h-[360px] w-[360px] md:h-[460px] md:w-[460px] overflow-hidden rounded-full shadow-2xl">
                {" "}
                {/* REAL PHOTO */}{" "}
                <Image
                  src="/profile-real.jpg"
                  alt="Portrait of Indra Tristia"
                  fill
                  priority
                  sizes="460px"
                  className="absolute inset-0 object-cover animate-image-real scale-110"
                />{" "}
                {/* ILLUSTRATED PHOTO */}{" "}
                <Image
                  src="/profile.jpg"
                  alt="Illustrated portrait of Indra Tristia"
                  fill
                  priority
                  sizes="460px"
                  className="absolute inset-0 object-cover animate-image-illustration"
                />{" "}
              </div>{" "}

            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-10">

              <div className="sm:text-right lg:col-span-3 lg:col-start-12 lg:pb-8">
                <Link
                  href="mailto:indratrst@gmail.com"
                  className="group inline-flex items-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-[0.15em] text-[#111111]"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#D8D6D0] py-4 sm:py-5">
          <span className="text-[10px] uppercase tracking-[0.16em] text-[#303030]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#303030]">
              Based in
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.08em] text-[#303030]">
              Indonesia
            </p>
          </span>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#303030]">
            Scroll
            <span className="block h-8 w-px bg-[#111111]" />
            <ArrowBigDownDash
              size={15}
              strokeWidth={6.5}
              color="#0d4dbb"
              className="animate-bounce transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
