"use client";

import { useEffect, useRef, useState } from "react";

// if (typeof window !== "undefined") {
//   const getUserfromLocalStorage = localStorage.getItem("isDarkMode")
//     ? localStorage.getItem("isDarkMode")
//     : false;
// }

interface HeroProps {
  text: string;
}

export default function Hero({
  text = "Front End Web Developer Based in Indonesia",
}: HeroProps) {
  //   const [isDarkMode, setisDarkMode] = useState<boolean>(false);
  //   useEffect(() => {
  //     // if (typeof window !== "undefined") {
  //     const getUserfromLocalStorage = localStorage.getItem("isDarkMode")
  //       ? localStorage.getItem("isDarkMode")
  //       : null;
  //     setisDarkMode(getUserfromLocalStorage === "true");
  //     // }
  //   }, []);

  // const [animationDuration, setAnimationDuration] = useState(0);
  // const textRef = useRef<HTMLSpanElement>(null);

  // useEffect(() => {
  //   if (textRef.current) {
  //     const textLength = text.length;
  //     setAnimationDuration(textLength * 0.1); // 0.1s per character
  //   }
  // }, [text]);

  // const [displayText, setDisplayText] = useState("");
  // const [showCursor, setShowCursor] = useState(true);

  // useEffect(() => {
  //   setDisplayText(""); // Reset teks saat `text` berubah
  //   let index = 0;

  //   const typingInterval = setInterval(() => {
  //     if (index < text.length) {
  //       setDisplayText(text.slice(0, index + 1));
  //       index++;
  //     } else {
  //       clearInterval(typingInterval);
  //       setShowCursor(false); // Hentikan cursor berkedip setelah teks selesai
  //     }
  //   }, 100);

  //   return () => clearInterval(typingInterval);
  // }, [text]);
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
            {/* <div className="lg:mt-80 absolute lg:right-0">
              <img
                src="/hero-left.svg"
                alt="pic hero"
                className="relative -z-10 max-w-full mx-auto -ms-[75px] lg:ms-[230px] -mt-72 scale-[1.6] lg:-mt-[310px] transform lg:scale-[2.1]"
              />
            </div> */}
            {/* <h1 className="text-base font-semibold text-primary md:text-xl">
              Selamat Datang 👋, Saya{" "}
            </h1> */}
            <h2 className="w-fit text-dark text-5xl lg:text-[85px] dark:text-light leading-[1.1]  tracking-wide font-founderGrotesk">
              {" "}
              Hello👋
              <br />
              <span className="text-[36px] lg:text-[30px]  text-base font-semibold text-primary">
                Saya
              </span>
              Indra Tristia
              {/* <span
                ref={textRef}
                className=" text-black text-5xl  dark:text-light leading-snug tracking-wide line-1 font-newSpirit"
                style={{
                  animation: text
                    ? `typewriter ${animationDuration}s steps(${text.length}) 1s forwards, 
         blinkTextCursor 500ms steps(44) infinite`
                    : "none",
                }}
              >
                {text}
              </span> */}
            </h2>
            {/* <h2 className="font-medium text-secondary text-lg  lg:text-2xl">
              Self Taught{" "}
            </h2> */}
            {/* <span className="lg:text-5xl text-primary font-light dark:text-light pb-3 font-newSpirit">
              {" "}
              Front End Web Developer Based in Indonesia
            </span> */}
            {/* <span
              ref={textRef}
              className=" lg:text-5xl text-primary font-light pb-3 text-5xl  dark:text-light leading-snug tracking-wide line-1 font-newSpirit"
              style={{
                animation: text
                  ? `typewriter ${animationDuration}s steps(${text.length}) 1s forwards, 
         blinkTextCursor 500ms steps(44) infinite`
                  : "none",
              }}
            >
              {text}
            </span> */}
            {/* <span className="lg:text-4xl text-primary font-light pb-3 text-5xl dark:text-light leading-snug tracking-wide font-newSpirit">
              {displayText}
              {showCursor && <span className="blinking-cursor"></span>}
            </span> */}
            <p className="text-base font-medium text-secondary mb-6 lg:text-lg">
              Life long{" "}
              <span className="text-base font-medium text-secondary mb-6 lg:text-lg">
                Learner ! As a dedicated Frontend Developer, I'm passionate
                about developing technlogy and continuously enhancing my skills
                to create exceptional digital experiences.
              </span>
            </p>

            <button className="self-start text-base font-semibold bg-primary py-3 px-8  rounded-full text-white hover:shadow-lg hover:opacity-90 transition duration-400 ease-in-out cursor-pointer relative z-50">
              <a href="mailto:tristia71@gmail.com">Hubungi Saya </a>
            </button>
          </div>

          <div className="w-full self-start px-4 lg:w-1/2 ">
            <div className="-mt-20 relative lg:right-0" data-aos="fade-down">
              <img
                src="/hero.svg"
                alt="pic hero"
                className="relative z-10 max-w-full mx-auto mt-16 lg:mt-2 lg:-bottom-14 lg:-right-20 transform md:scale-125"
              />
              <img
                src="/hero-group-right.svg"
                alt="pic hero"
                className="absolute -z-10 max-w-full mx-auto -ms-[75px] lg:-ms-[210px] -mt-72 scale-[2.6] lg:-mt-72 transform lg:scale-[2.3] -left-28 lg:left-0 "
              />
              {/* <span className="absolute -bottom-24 md:-bottom-9 lg:-bottom-28  left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  className="w-[400px] h-[500px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
                  height="150 lg:550"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#730000"
                    d="M36.6,-20.9C50.5,-11.8,66.9,3.6,65,16.1C63.2,28.6,43.1,38.2,24,46C4.8,53.8,-13.4,59.8,-18.2,52C-23.1,44.3,-14.5,22.8,-21.7,1.9C-28.9,-19,-51.9,-39.4,-50.9,-45.5C-49.9,-51.7,-25,-43.6,-6.8,-38.2C11.4,-32.8,22.8,-30,36.6,-20.9Z"
                    transform="translate(100 100) scale(1)"
                  />
                </svg>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
