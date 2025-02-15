import { ProjectType } from "@/data/type";
import React, { useState } from "react";
import CategoryStack from "../CategoryStack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

interface ProjectCardProps {
  projects: ProjectType[];
}

const CardProject: React.FC<ProjectCardProps> = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default ke index tengah

  return (
    <Swiper
      slidesPerView={3} // Menampilkan 3 card
      spaceBetween={30} // Jarak antar card
      centeredSlides={true} // Pastikan card tengah selalu terlihat
      loop={true} // Infinite loop agar tidak berhenti
      speed={1200}
      autoplay={{
        delay: 4000, // Ganti slide setiap 2 detik
        disableOnInteraction: true, // Jangan berhenti meskipun user klik/swipe
      }}
      onSlideChange={(swiper) => setHoveredIndex(swiper.realIndex)} // Update card tengah
      modules={[FreeMode, Autoplay]}
      className="w-full h-[600px] flex justify-center"
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center justify-items-center mt-32"
        >
          <div
            className={`relative flex items-center w-full max-w-[500px] transition-all duration-1000  ease-in-out ${
              hoveredIndex === index ? "mt-7" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            5
            <div
              className={`relative w-full h-[200px] mx-5 p-[20px] px-[34px] flex flex-col shadow-md rounded-[15px] transition-all  duration-1000 ease-in-out ${
                hoveredIndex === index ? "h-[450px]" : ""
              }`}
            >
              {/* Gambar */}
              <div className="relative w-[440px] h-[200px] -top-[40%] -left-[1%] shadow-lg z-10">
                <img
                  src={project.image}
                  className="w-full max-w-full rounded-[15px]"
                />
              </div>

              {/* Deskripsi */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center p-[10px] px-[15px] text-center text-gray-900 transition-all  duration-1000 ease-in-out ${
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
