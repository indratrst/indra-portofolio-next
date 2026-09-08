import Link from "next/link";
import { ArrowBigDown, ArrowBigDownDash, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#F4F3EF] text-[#111111]"
    >
      {/* Subtle editorial grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="mx-auto h-full max-w-full border-x border-[#D8D6D0]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-full flex-col px-5 sm:px-8 lg:px-12">
        {/* ------------------------------------------------ */}
        {/* HERO HEADER                                      */}
        {/* ------------------------------------------------ */}

        <header className="flex items-center justify-between border-b border-[#D8D6D0] py-5">
          <Link
            href="/"
            className="text-[35px] font-semibold uppercase tracking-[-0.011em]"
          >
            Indra
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <Link
              href="#work"
              className="text-[11px] uppercase tracking-[0.14em] text-[#777777] transition-colors hover:text-[#111111]"
            >
              Work
            </Link>

            <Link
              href="#about"
              className="text-[11px] uppercase tracking-[0.14em] text-[#777777] transition-colors hover:text-[#111111]"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="text-[11px] uppercase tracking-[0.14em] text-[#777777] transition-colors hover:text-[#111111]"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="text-[11px] uppercase tracking-[0.14em] md:hidden"
          >
            Menu
          </Link>
        </header>

        {/* ------------------------------------------------ */}
        {/* HERO CONTENT                                     */}
        {/* ------------------------------------------------ */}

        <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
          {/* Eyebrow */}
          <div className=" lg:col-span-2 lg:pt-9">
            {/* <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#777777]">
              Tristia
            </p> */}
            <h1 className="max-w-[1250px] text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[7.2vw]">
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
          <div className="flex flex-col justify-center pb-16 pt-14 lg:col-span-9 lg:col-start-1 lg:pb-0 lg:pt-32">
            <h1 className="max-w-[1250px] text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[4.2vw]">
              <span className="block pb-4">
                I&apos;m<span className="text-[#0d4dbb]"></span>
              </span>
            </h1>

            <h1 className="max-w-[1250px] text-[15vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[8.2vw]">
              <span className="block pl-[7vw] lg:pl-[2svw]">Frontend</span>
              <span className="block pl-[7vw] lg:pl-[20svw]">
                Developer<span className="text-[#0d4dbb]">.</span>
              </span>
            </h1>

            <div className="pointer-events-none absolute right-[10vw] top-[18%] z-0 hidden lg:block">
              {" "}
              <div className="relative h-[460px] w-[460px] overflow-hidden rounded-full shadow-2xl">
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
            {/* Bottom metadata */}
            <div className="mt-16 grid grid-cols-1 gap-10 pt-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
              <div className="lg:col-span-3">
                {/* <p className="text-[10px] uppercase tracking-[0.15em] text-[#999999]">
                  Based in
                </p> */}

                {/* <p className="mt-2 text-sm uppercase tracking-[0.08em]">
                  Indonesia
                </p> */}
              </div>

              <div className="lg:col-span-3">
                {/* <p className="text-[10px] uppercase tracking-[0.15em] text-[#999999]">
                  Availability
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.08em]">
                  Available for freelance
                </p> */}
              </div>

              <div className="sm:text-right lg:col-span-3 lg:col-start-12 pb-8 whitespace-nowrap">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em]"
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

        {/* ------------------------------------------------ */}
        {/* SCROLL INDICATOR                                 */}
        {/* ------------------------------------------------ */}

        <div className="flex items-center justify-between border-t border-[#D8D6D0] py-5">
          <span className="text-[10px] uppercase tracking-[0.16em] text-[#303030]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#303030]">
              Based in
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.08em]">
              Indonesia
            </p>
          </span>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#303030]">
            Scroll
            <span className="block h-8 w-px bg-[#111111]" />
             <ArrowBigDownDash
                    size={15}
                    strokeWidth={6.5}
                    color="#0d4dbb  "
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 animate-bounce"
                  />
          </div>
        </div>
      </div>
    </section>
  );
}
