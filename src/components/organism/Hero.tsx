"use client";

// if (typeof window !== "undefined") {
//   const getUserfromLocalStorage = localStorage.getItem("isDarkMode")
//     ? localStorage.getItem("isDarkMode")
//     : false;
// }

export default function Hero() {
  //   const [isDarkMode, setisDarkMode] = useState<boolean>(false);
  //   useEffect(() => {
  //     // if (typeof window !== "undefined") {
  //     const getUserfromLocalStorage = localStorage.getItem("isDarkMode")
  //       ? localStorage.getItem("isDarkMode")
  //       : null;
  //     setisDarkMode(getUserfromLocalStorage === "true");
  //     // }
  //   }, []);

  return (
    <section
      id="home"
      className="pt-20 lg:pt-44 dark:bg-dark bg-white transition-colors duration-500"
    >
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="w-full self-center md:px-14 lg:w-1/2"
            data-aos="fade-down"
          >
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Selamat Datang 👋, Saya{" "}
              <span className="block text-dark text-4xl font-bold mt-1 lg:5xl dark:text-light">
                {" "}
                Indra Tristia
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Self Taught{" "}
              <span className="text-dark dark:text-light">
                {" "}
                Full Stack Web Developer{" "}
              </span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Life long{" "}
              <span className="text-dark font-bold uppercase dark:text-light">
                Learner !
              </span>
            </p>

            <a
              href="mailto:tristia71@gmail.com"
              className="text-base font-semibold bg-primary py-3 px-8 rounded-full text-white hover:shadow-lg hover:opacity-90 transition duration-400 ease-in-out cursor-pointer relative z-50"
            >
              Hubungi Saya{" "}
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="-mt-20 relative lg:right-0" data-aos="fade-down">
              <img
                src="/hero.png"
                alt="pic hero"
                className="relative z-10 max-w-full mx-auto lg:-mt-64 transform"
              />
              <span className="absolute -bottom-3  left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="350"
                  height="350"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#961c1c"
                    d="M36.6,-20.9C50.5,-11.8,66.9,3.6,65,16.1C63.2,28.6,43.1,38.2,24,46C4.8,53.8,-13.4,59.8,-18.2,52C-23.1,44.3,-14.5,22.8,-21.7,1.9C-28.9,-19,-51.9,-39.4,-50.9,-45.5C-49.9,-51.7,-25,-43.6,-6.8,-38.2C11.4,-32.8,22.8,-30,36.6,-20.9Z"
                    transform="translate(100 100) scale(1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,224L60,208C120,192,240,160,360,149.3C480,139,600,149,720,170.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
