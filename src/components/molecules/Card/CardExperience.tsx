import { ExperienceType, ProjectType } from "@/data/type";
import React, { useState } from "react";
import CategoryStack from "../CategoryStack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

interface ExperienceCardProps {
  experiences: ExperienceType[];
}

const CardExperience: React.FC<ExperienceCardProps> = ({ experiences }) => {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default ke index tengah

  return (
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
      onSlideChange={(swiper) => setHoveredIndex(swiper.realIndex)}
      modules={[FreeMode, Autoplay]}
      className="w-full flex justify-center"
    >
      {experiences.map((item, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="w-[100%] border-gray-400 bg-white rounded-b flex flex-col leading-normal">
            {/* Wrapper untuk gambar dan teks */}
            <div className="relative group ">
              {/* Image */}
              <img
                src={item.image}
                className="w-full transition-all duration-500"
              />

              {/* Wrapper untuk title + description yang bertambah tinggi */}
              <div
                className="absolute -bottom-5 left-0  shadow-sm border-b-2 w-full bg-white p-4 pt-2 h-[45px] group-hover:h-[320px] 
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
  );
};

export default CardExperience;
