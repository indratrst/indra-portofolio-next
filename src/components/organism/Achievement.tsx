import React, { useMemo } from "react";
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
  return (
    <>
      <section
        id="Achievement"
        className="pt-12 md:pt-36 pb-9 bg-white dark:bg-slate-800"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2" data-aos="fade-up">
              <h4 className="font-bold  text-primary text-lg mb-3">
                Achievement
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-light">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto deleniti vero voluptate adipisci ad. Debitis
              </p>
            </div>
            <div className="w-full px-4 lg:w-full lg:pt-1" data-aos="fade-up">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:items-stretch">
                <div className="lg:col-span-2 lg:py-3">
                  <div className="flex flex-row-reverse items-center justify-around  mx-auto text-red-600">
                    <div className="swiper-button-next px-8">
                      <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
                        <SvgArrowRight />
                      </button>
                    </div>

                    <Swiper
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
                      className="w-full flex justify-center "
                    >
                      <div className="custom-swiper-pagination  flex mt-8 gap-4 justify-center" />{" "}
                      {acheivementData.map((item, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={item.image}
                            alt=""
                            className="aspect-auto w-full rounded object-cover"
                          />

                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                              {item.title}
                            </h3>
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
