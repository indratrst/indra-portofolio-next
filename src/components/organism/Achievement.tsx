import React, { useEffect, useMemo, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SvgArrowLeft from "../molecules/SvgArrowLeft";
import SvgArrowRight from "../molecules/SvgArrowRight";
import { acheivementData } from "@/data/dataAcheivement";
import { AcheivementType } from "@/data/type";

interface acheivementProps {
  acheivements: AcheivementType[];
}

const Achievement: React.FC<acheivementProps> = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll(".card-item");
    let max = 0;
    cards.forEach((c) => {
      if (c.clientHeight > max) max = c.clientHeight;
    });
    cards.forEach((c) => ((c as HTMLElement).style.height = max + "px"));
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        id="Achievement"
        className="relative mt-1 dark:mt-0 pt-12 md:pt-36 pb-9 bg-white dark:bg-basic overflow-hidden shadow-lg"
      >
        <div
          className="absolute inset-0 bg-right bg-no-repeat bg-[length:600px] bg-fixed "
          style={{
            backgroundImage: "url('/champion.svg')",
            transform: `translateY(${offset * 0.4 - 1190}px)`, // parallax speed 0.3x
          }}
        ></div>
        {/* <div
          className="absolute inset-0 bg-left bg-no-repeat bg-[length:150px] bg-fixed "
          style={{
            backgroundImage: "url('/starball.svg')",
            transform: `translateY(${offset * 0.4 - 1199}px)`, // parallax speed 0.3x
          }}
        ></div> */}
        <div className="absolute inset-0 bg-basic/50 dark:bg-slate-800/90"></div>
        {/* <img
          src="/ach-text.svg"
          alt="pic hero"
          className="absolute -left-20  max-w-full mx-auto -ms-[75px] lg:-ms-[2px]  scale-[1.6] lg:-mt-36 transform lg:scale-[.5]"
        /> */}
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2" data-aos="fade-up">
              <h4 className="font-bold  text-primary text-lg mb-3">
                Achievement
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-light">
                My Achievement
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Beberapa sertifikat yang telah saya dapatkan setelah
                menyelesaikan kelas dan event pada beberapa platform
              </p>
            </div>
            <div className="w-full  lg:w-full lg:pt-1" data-aos="fade-up">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:items-stretch">
                <div className="lg:col-span-2 lg:py-3">
                  <div className="flex flex-row-reverse items-center justify-around  mx-auto text-red-600">
                    <div className="swiper-button-next px-8">
                      <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
                        <SvgArrowRight />
                      </button>
                    </div>

                    {/* <Swiper
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                      slidesPerView={1}
                      spaceBetween={10}
                      direction="horizontal"
                      navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                      }}
                      pagination={{
                        clickable: true,
                        el: ".custom-swiper-pagination",
                      }}
                      modules={[Pagination, Navigation]}
                      className="w-full flex flex-1"
                    >
                      <div className="custom-swiper-pagination  flex mt-8 gap-4 justify-center" />{" "}
                      {acheivementData.map((item, index) => (
                        <SwiperSlide key={index} className="h-full">
                          <div className="relative m-6">
                            <span className="absolute -z-10  w-full h-full inset-1 bg-sand dark:bg-reds  rounded-xl"></span>
                            <button className="absolute py-1 z-10 px-3 -left-4 -top-2 -rotate-[10deg] black_border bg-sand dark:bg-reds text-white font-bold">
                              {item.source}
                            </button>

                            <div className="p-8 border border-black dark:border-slate-500 sand_border  bg-white dark:bg-dark rounded-xl z-20 h-full flex flex-col">
                              <div className="flex-grow">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="aspect-auto w-full rounded object-cover"
                                />
                              </div>
                              <div className="text-dark dark:text-light font-medium text-md py-4">
                                {item.title}
                              </div>

                              <div className="text-dark dark:text-light font-medium text-md py-4">
                                Read more...
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper> */}
                    <Swiper
                      breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 3, spaceBetween: 50 },
                      }}
                      slidesPerView={1}
                      spaceBetween={10}
                      direction="horizontal"
                      navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                      }}
                      pagination={{
                        clickable: true,
                        el: ".custom-swiper-pagination",
                      }}
                      modules={[Pagination, Navigation]}
                      className="w-full flex items-stretch"
                    >
                      <div className="custom-swiper-pagination flex mt-8 gap-4 justify-center" />

                      {acheivementData.map((item, index) => (
                        <SwiperSlide key={index} className="h-full">
                          <div className="relative m-6 h-full">
                            <span className="absolute -z-10 w-full h-full inset-1 bg-sand dark:bg-reds rounded-xl"></span>
                            <button className="absolute py-1 z-10 px-3 -left-4 -top-2 -rotate-[10deg] black_border bg-sand dark:bg-reds text-white font-bold">
                              {item.source}
                            </button>

                            <div className="p-8 border border-black dark:border-slate-500 sand_border bg-white dark:bg-dark rounded-xl z-20 h-full flex flex-col card-item">
                              <img
                                src={item.image}
                                alt=""
                                className="aspect-auto w-full rounded object-cover"
                              />
                              <div className="text-dark dark:text-light font-medium text-md py-4 flex-grow">
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="swiper-button-prev px-8">
                      <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
                        <SvgArrowLeft />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <ul className="grid grid-cols-3 gap-3">
                      <li>
                        <img
                          src="/sertifikat/english-2020.png"
                          alt=""
                          className="aspect-auto w-full rounded object-cover"
                        />

                        <div className="mt-3">
                          <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                            Simple Watch
                          </h3>

                          <p className="mt-1 text-sm text-gray-700">$150</p>
                        </div>
                      </li>

                      <li>
                        <img
                          src="/sertifikat/niagahoster.png"
                          alt=""
                          className="aspect-auto w-full rounded object-cover"
                        />

                        <div className="mt-3">
                          <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                            Simple Watch
                          </h3>

                          <p className="mt-1 text-sm text-gray-700">$150</p>
                        </div>
                      </li>
                      <li>
                        <img
                          src="/sertifikat/niagahoster.png"
                          alt=""
                          className="aspect-auto w-full rounded object-cover"
                        />

                        <div className="mt-3">
                          <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                            Simple Watch
                          </h3>

                          <p className="mt-1 text-sm text-gray-700">$150</p>
                        </div>
                      </li>
                    </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
