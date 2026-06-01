"use client";

import { useLanguage } from "@/contexts/languageContext";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { messages } = useLanguage();
  return (
    <section
      id="home"
      className="dark:bg-dark  transition-colors duration-500 bg-basic overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-wrap h-full min-h-[90vh]  lg:min-h-[100vh] items-center py-10 lg:pt-48">
          <div
            className="w-full md:px-5 lg:w-1/2 flex flex-col flex-shrink-0 gap-y-1 self-start h-full"
            data-aos="fade-down"
          >
            <h2 className="w-fit text-dark text-5xl lg:text-[85px] dark:text-light leading-[1.1]  tracking-wide font-founderGrotesk">
              {" "}
              {messages?.hero?.title}👋
              <br />
              <span className="text-[36px] lg:text-[30px]  text-base font-semibold text-primary">
                {messages?.hero?.span}
              </span>
              Indra Tristia
            </h2>

            <p className="text-sm md:text-base font-medium text-secondary mb-6 lg:text-lg">
              <span className="text-sm md:text-base font-medium text-secondary mb-6 lg:text-lg">
                {messages?.hero?.description}
              </span>
            </p>

            <Link
              href="mailto:tristia71@gmail.com"
              className="relative z-20 inline-block self-start text-base font-semibold bg-primary py-3 px-8 rounded-full text-white hover:shadow-lg hover:opacity-90 transition duration-400 ease-in-out cursor-pointer"
            >
              {messages?.hero?.button}
            </Link>
          </div>

          <div className="w-full self-start px-4 lg:w-1/2 relative z-0">
            <div
              className="relative w-full min-h-[400px] -mt-20 lg:right-0"
              data-aos="fade-down"
            >
              <Image
                width={324}
                height={24}
                src="/hero.svg"
                alt="pic hero"
                className="relative z-10 max-w-full mx-auto mt-24 lg:mt-2 lg:-bottom-14 lg:-right-20 transform md:scale-125"
              />
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  fill
                  priority
                  src="/hero-group-right.svg"
                  alt="pic hero"
                  className="object-contain mx-auto -ms-[75px] md:-ms-52 lg:-ms-[170px] -mt-2 md:mt-12 lg:mt-9 scale-[1.6] md:scale-[1.9] transform lg:scale-[2.3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
