import { ExperienceType, ProjectType } from "@/data/type";
import React, { useState } from "react";
import CategoryStack from "../CategoryStack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import SvgArrowLeft from "../SvgArrowLeft";
import SvgArrowRight from "../SvgArrowRight";

interface ExperienceCardProps {
  experiences: ExperienceType[];
}

const CardExperience: React.FC<ExperienceCardProps> = ({ experiences }) => {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default ke index tengah

  return (
    <>
      <div className="relative w-full">
        <div className="flex gap-x-4 -mt-3">
          <div className="swiper-button-prev">
            <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
              <SvgArrowLeft />
            </button>
          </div>

          <div className="swiper-button-next">
            <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
              <SvgArrowRight />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={false}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={(swiper) => setHoveredIndex(swiper.realIndex)}
          modules={[FreeMode, Autoplay, Navigation]}
          className="w-full flex justify-center mt-4"
        >
          {experiences.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-full   border-gray-400 bg-white rounded-b flex flex-col leading-normal">
                {/* Wrapper untuk gambar dan teks */}
                <div className="relative group ">
                  {/* Image */}
                  <img
                    src={item.image}
                    className="w-[899px] h-full transition-all duration-500 object-cover"
                  />

                  {/* Wrapper untuk title + description yang bertambah tinggi */}
                  <div
                    className="absolute -bottom-1 left-0  shadow-sm border-b-2 w-full bg-[#f1f5f9] p-4 pt-2 h-[45px] group-hover:h-[220px] 
               transition-all duration-500 ease-in-out origin-bottom overflow-hidden"
                  >
                    <a
                      href="#"
                      className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                    >
                      {item.title}
                    </a>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CardExperience;
