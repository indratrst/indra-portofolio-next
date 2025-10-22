import { ProjectType } from "@/data/type";
import React, { useState } from "react";
import CategoryStack from "../CategoryStack";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

interface ProjectCardProps {
  projects: ProjectType[];
}

const CardProject: React.FC<ProjectCardProps> = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default ke index tengah

  return (
    <Swiper
      slidesPerView={1} // Default: 1 card untuk semua layar
      spaceBetween={20} // Jarak antar card
      centeredSlides={false} // Pastikan card tengah selalu terlihat
      loop={false} // Infinite loop agar tidak berhenti
      speed={1200}
      autoplay={{
        delay: 4000, // Ganti slide setiap 4 detik
        disableOnInteraction: true, // Jangan berhenti meskipun user klik/swipe
      }}
      breakpoints={{
        1024: {
          slidesPerView: 3, // Hanya di desktop (≥1024px), tampilkan 3 card
          spaceBetween: 40,
        },
      }}
      onSlideChange={(swiper) => setHoveredIndex(swiper.realIndex)} // Update card tengah
      modules={[FreeMode, Autoplay]}
      className="w-full h-[50em]  md:h-[650px] flex justify-center"
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center justify-items-center lg:mt-10"
        >
          <div
            className={`relative flex items-center w-full max-w-[500px] transition-all duration-1000  ease-in-out ${
              hoveredIndex === index ? "mt-7" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div
              className={`relative w-full mx-5 p-[15px] px-[34px] flex flex-col shadow-sand dark:shadow-primary shadow-md rounded-[15px] transition-all duration-700 ease-in-out overflow-hidden
    ${hoveredIndex === index ? "max-h-[1000px]" : "max-h-[250px]"}
  `}
            >
              {/* Gambar */}
              <div className="relative w-full md:max-w-[440px]  -left-[1%] shadow-lg z-10 rounded-t-md">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  className="w-full  max-w-full rounded-t-md"
                  alt="project image"
                />
              </div>
              {/* Deskripsi */}
              <div
                className={`relative inset-0 flex flex-col justify-center items-center -top-[30%] p-[10px] px-[15px] text-center text-gray-900 transition-all  duration-1000 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-100 visible mt-7"
                    : "opacity-0 invisible"
                }`}
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
                <h4 className="font-semibold mt-3 text-gray-700 dark:text-gray-400">
                  Tech Stack :
                </h4>
                <div className="flex gap-x-2 flex-wrap justify-center">
                  <CategoryStack categories={project.categories} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardProject;
